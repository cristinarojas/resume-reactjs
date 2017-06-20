// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Menu from './Menu';

// Data
import items from '../../data/menu';

// Assets
import './css/Content.css';

class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
    const { body } = this.props;

    return (
      <div className="Content">
        <Menu
          title="Cristina Rojas Resume"
          items={items}
        />
        {body}
      </div>
    );
  }
}

export default Content;
