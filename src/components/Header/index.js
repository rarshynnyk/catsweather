import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Cats weather',
      description: 'cats are really smart they always choose close by weather'
    }
  }

  render() {
    return (
      <div>
        <header className="Header">
          <h1>{this.state.title}</h1>
          <h4>{this.state.description}</h4>
        </header>
      </div>
    );
  }
}

export default Header;
