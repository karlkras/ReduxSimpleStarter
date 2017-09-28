import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';


class PartnersSelect extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Select {...this.props}
                    options={this.props.partners}
            />

        );
    }

}

function mapStateToProps({ partners }) {
    return { partners };
}

export default connect(mapStateToProps)(PartnersSelect);
