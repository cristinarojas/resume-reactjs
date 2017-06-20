// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Content from './Global/Content';
//import Footer from './Global/Footer';

// Data
import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Content body={children} />
      </div>
    );
  }
}

export default App;
