import React, { Component } from 'react';
import PartnersSelect from './partners_select';
import SeasonsSelect from './seasons_select';



export default class FullLoadPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            season: '',
            partner: ''
        };

        this.updateSeason = this.updateSeason.bind(this);
        this.updatePartner = this.updatePartner.bind(this);

    }

    updatePartner(newValue) {
        console.log('State changed to: ', newValue);
        this.setState({
            partner: newValue,
        });
    }

    updateSeason(newValue) {
        console.log('State changed to: ', newValue);
        this.setState({
            season: newValue,
        });
    }

    render() {
        const { partner, season} = this.state;
        const isEnabled = partner && season;
        return (
            <div className="col-3 ml-auto box full-load dlg">
                <div className="row">
                    <div className="col-sm-12">
                        <h5>
                            Full product offer download
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <hr/>
                    </div>
                </div>
                <form>
                    <div className="form-group row">
                        <label htmlFor="selectTradingPartner" className="col-sm-12 col-form-label">
                            Select EDI Trading Partner</label>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <PartnersSelect
                                id="selectTradingPartner"
                                name="form-st-partner-select"
                                placeholder="Select EDI Trading Partner"
                                value={this.state.partner}
                                onChange={this.updatePartner}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="selectFLSeasonYear" className="col-sm-12 col-form-label">Select Season/Year</label>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <SeasonsSelect
                                id="selectFLSeasonYear"
                                name="form-fl-season-select"
                                placeholder="Select Season/Year"
                                value={this.state.season}
                                onChange={this.updateSeason}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <button
                                className="btn-regular-nikeorange float-right"
                                disabled={!isEnabled}
                            >submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}