import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchWeather, fetchPartners, fetchSeasons } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    componentWillMount() {
        /* Initialize the data... */
        this.props.fetchPartners();
        this.props.fetchSeasons();
    }

    render() {
        return (
            <form
                className="input-group"
                onSubmit={this.onFormSubmit}
                >
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    onChange={this.onInputChange}
                    value={this.state.term}
                />
                <span className="input-group-btn">
                    <button
                        type="submit"
                        className="btn btn-secondary"
                    >
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather, fetchPartners, fetchSeasons }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);