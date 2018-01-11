import React, { Component } from 'react';

import './WeatherPicture.css';

class WeatherPicture extends Component {

  render() {
    // TODO
    const imageSrc = {
      snow: 'https://pixabay.com/get/e83db00e20f4033ed1534705fb0938c9bd22ffd41cb0144695f7c77ca0/cat-1811802_1920.jpg',
      rainy: 'http://teresaflourlamb.com/imgs/weatherwhiskers/umbrella_cat.jpg'
    }

    return (
      <div className="weather-picture">
        <h4 className="weather-picture__title">Weather in {this.props.city}</h4>
        <img className="weather-picture__img" src={imageSrc.rainy} alt=""/>
      </div>
    );
  }
}

export default WeatherPicture;
