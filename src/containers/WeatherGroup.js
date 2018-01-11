import React, { Component } from 'react';
import axios from 'axios';

import { WEATHER_API_URL } from '../configs';
import WeatherPicture from '../components/WeatherPicture';

class WeatherGroup extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      weather: null
    }
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather() {
    axios.get(WEATHER_API_URL).then((res) => {
      this.setState({
        city: res.data.city.name,
        weather: res.data.list[0].weather[0].main
      });
    });
  }

  render() {
    return (
      <div>
        <WeatherPicture city={this.state.city} weather={this.state.weather} />
      </div>
    );
  }
}

export default WeatherGroup;
