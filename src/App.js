import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import GitHubLink from './components/GitHubLink';
import WeatherPicture from './containers/WeatherGroup';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <WeatherPicture />
        <GitHubLink />
      </div>
    );
  }
}

export default App;
