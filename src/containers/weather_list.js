import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import PartnersSelect from './partners_select';
import SeasonsSelect from './seasons_select';
import Radio from '../components/radio';

class WeatherList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            season: '',
            partner: '',
            userTypeRadioOption: 'trading-partner'
        };

        this.updateSeason = this.updateSeason.bind(this);
        this.updatePartner = this.updatePartner.bind(this);
        this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
    }

    handleUserTypeChange(changeEvent) {
        this.setState({
            userTypeRadioOption: changeEvent.target.value,
            partner: ''
        });
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


    renderWeather(cityData) {
        const city = cityData.city;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat} = cityData.city.coord;

        return(
            <tr key={city.id}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} unit="&#8457;" color="red"/></td>
                <td><Chart data={pressures} unit="hPa" color="blue"/></td>
                <td><Chart data={humidities} unit="%" color="green"/></td>
            </tr>
        );

    }

    render() {
        console.log("Partners: " + this.props.partners);
        console.log(this.props.seasons);
        return (
            <div>
                <table className="table table-hover" >
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (&#8457;)</th>
                            <th>Pressure (hpa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>

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
                            <input className="soldToId" placeholder="Enter a Sold To id"/>
                        </div>
                        : null
                }

                <SeasonsSelect
                    name="form-st-season-select"
                    placeholder="Select Season/Year"
                    value={this.state.season}
                    onChange={this.updateSeason}
                />
                <div>
                    <Radio
                        label='EDI Trading Partner'
                        value='trading-partner'
                        checked={this.state.userTypeRadioOption === 'trading-partner'}
                        onChange={this.handleUserTypeChange}
                    />
                    <Radio
                        label='Sold To'
                        value='sold-to'
                        checked={this.state.userTypeRadioOption === 'sold-to'}
                        onChange={this.handleUserTypeChange}
                    />
                </div>
            </div>
        );
    }

}

function mapStateToProps({weather, partners, seasons }) {
    return { weather, partners, seasons };
}

export default connect(mapStateToProps)(WeatherList);
