import { Component } from 'react';

import './hr.scss';

import beanDark from './images/bean-dark.svg';
import beanWhite from './images/bean-white.svg';

class Hr extends Component {
  render() {
    return (
      <div
        className={
          'hr-bean ' + (this.props.color === 'white' ? 'white' : 'dark')
        }
      >
        <div className="line"></div>
        <img
          src={this.props.color === 'white' ? beanWhite : beanDark}
          alt="bean"
        />
        <div className="line"></div>
      </div>
    );
  }
}

export default Hr;
