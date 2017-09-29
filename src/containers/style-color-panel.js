import React, { Component } from 'react';
import PartnersSelect from './partners_select';
import SeasonsSelect from './seasons_select';
import Radio from '../components/radio';



export default class SyleColorPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            season: '',
            partner: '',
            soldto: '',
            userTypeRadioOption: 'trading-partner',
            styleColors: '',
            maxStyleColors: 5,
            maxStyleColorsView: String(5).replace(/(.)(?=(\d{3})+$)/g,'$1,'),
            exceeds_max: false
        };

        this.updateSeason = this.updateSeason.bind(this);
        this.updatePartner = this.updatePartner.bind(this);
        this.updateSoldTo = this.updateSoldTo.bind(this);
        this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
        this.onStyleColorsInputChange = this.onStyleColorsInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserTypeChange(changeEvent) {
        this.setState({
            userTypeRadioOption: changeEvent.target.value,
            partner: '',
            soldto: ''
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        const the_state = this.state;

        let lines = (the_state.styleColors.trim()).split(/\r|\r\n|\n/);
        let count = lines.length;
        if(count > the_state.maxStyleColors) {
            this.setState({
                exceeds_max : true
            });
            return false;
        } else {
            this.setState({
                exceeds_max : false
            });
        }
    }

    onStyleColorsInputChange(event) {
        this.setState({styleColors: event.target.value});
    }

    updateSeason(newValue) {
        console.log('State changed to: ', newValue);
        this.setState({
            season: newValue,
        });
    }

    updatePartner(newValue) {
        console.log('State changed to: ', newValue);
        this.setState({
            partner: newValue,
        });
    }

    updateSoldTo(event) {
        console.log('State changed to: ', event.target.value);
        this.setState({
            soldto: event.target.value,
        });
    }

    render() {
        const { soldto, partner, season,  styleColors} = this.state;
        const isEnabled = (soldto || partner) && season && styleColors;
        return (
            <div className="col-3 box soldTo dlg mr-auto">
                <div className="row">
                    <div className="col-sm-12">
                        <h5>
                            Style-Color Download
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <hr/>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <fieldset className="scheduler-border">
                                <legend className="scheduler-border">User Type:</legend>
                                <div className="form-check">
                                    <Radio
                                        label='EDI Trading Partner'
                                        value='trading-partner'
                                        checked={this.state.userTypeRadioOption === 'trading-partner'}
                                        onChange={this.handleUserTypeChange}
                                    />
                                </div>
                                <div className="form-check">
                                    <Radio
                                        label='Sold To'
                                        value='sold-to'
                                        checked={this.state.userTypeRadioOption === 'sold-to'}
                                        onChange={this.handleUserTypeChange}
                                    />
                                </div>
                                {
                                    this.state.userTypeRadioOption === 'trading-partner'
                                        ?
                                        <div>
                                            <PartnersSelect
                                                name="form-st-partner-select"
                                                placeholder="Select EDI Trading Partner"
                                                value={this.state.partner}
                                                onChange={this.updatePartner}
                                            />
                                        </div>
                                        : null
                                }
                                {
                                    this.state.userTypeRadioOption === 'sold-to'
                                        ?
                                        <div>
                                            <input
                                                className="soldToId form-control"
                                                value={this.state.soldto}
                                                placeholder="Enter a Sold To id"
                                                onChange={this.updateSoldTo}
                                            />
                                        </div>
                                        : null
                                }
                            </fieldset>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="selectSCSeasonYear" className="col-sm-5 col-form-label text-right no-hz-padding">Select Season/Year:</label>
                        <div className="col-sm-7">
                            <SeasonsSelect
                                id="selectSCSeasonYear"
                                name="form-sc-season-select"
                                placeholder="Select Season/Year"
                                value={this.state.season}
                                onChange={this.updateSeason}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <label htmlFor="styleColorTextarea">Style-Colors (max {this.state.maxStyleColorsView}):</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <textarea
                                className="form-control"
                                id="styleColorTextarea"
                                rows="10"
                                onChange={this.onStyleColorsInputChange}
                                value={this.state.styleColors}
                            />
                        </div>
                        <div className="col-sm-1"/>
                        <div className="col-sm-5">
                            <button
                                className="btn-regular-nikeorange to-bottom"
                                disabled={!isEnabled}
                            >submit</button>
                        </div>
                        {
                            this.state.exceeds_max ?
                                <p className="error">Style-Color entries exceeds the {this.state.maxStyleColorsView} limit</p>
                                :
                                null
                        }
                    </div>
                </form>
            </div>
        );
    }
}