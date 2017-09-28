import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';


class SeasonsSelect extends Component {
    constructor(props) {
        super(props);

        // this.state = {season: ''};
        // this.updateSeason = this.updateSeason.bind(this);
    }

    // updateSeason(newValue) {
    //     console.log('State changed to: ', newValue);
    //     this.setState({
    //         season: newValue,
    //     });
    // }

    render() {
        return (
            <Select {...this.props}
                options={this.props.seasons}
            />

        );
    }
}

function mapStateToProps({ seasons }) {
    return { seasons };
}

export default connect(mapStateToProps)(SeasonsSelect);
