import React, { Component } from 'react';
import '../App.css';

import GuessedWords from './components/GuessedWords'
import Congrats from './components/Congrats'

class Jotto extends Component {

  render() {
    return (
      <div data-test="component-jotto" className='container'>
        <h1>Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]}/>
      </div>
    )
  }
}

export default Jotto;