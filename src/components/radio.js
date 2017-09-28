import React, { Component } from 'react'





export default class Radio extends Component {

    render() {
        const props = Object.assign({}, this.props);
        const label = props.label;
        delete props.label;

        return (
            <div className="radio">
                <label>
                    <input
                        type="radio"
                        {...props}
                    />
                    {label}
                </label>
            </div>

        );
    }

}