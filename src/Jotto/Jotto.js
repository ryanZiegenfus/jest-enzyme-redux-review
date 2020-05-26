import React, { Component } from 'react';
import './Jotto.css';

class Jotto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div data-test="component-jotto">
      </div>
    )
  }
}

export default Jotto;