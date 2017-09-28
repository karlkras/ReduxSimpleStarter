import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchPartners, fetchSeasons } from '../actions/index';
import FullLoadPanel from './full-load-panel';
import StyleColorPanel from './style-color-panel';

class PDFDownloadPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        /* Initialize the data... */
        this.props.fetchPartners();
        this.props.fetchSeasons();
    }

    render() {
        return (
            <div className="container-fluid main">
                <div className="row flex-nowrap">
                    <div className="col-1"/>
                    <FullLoadPanel/>
                    <div className="col-1"/>
                    <StyleColorPanel/>
                    <div className="col-3"/>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPartners, fetchSeasons }, dispatch);
}

export default connect(null, mapDispatchToProps)(PDFDownloadPage);