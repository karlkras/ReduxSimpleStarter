import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';


class SeasonsSelect extends Component {

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
