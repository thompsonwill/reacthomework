import React, { Component } from 'react';
import './App.css';

import Wrapper from "./components/Wrapper";
import Game from "./components/Game"


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Game />
      </Wrapper>
    );
  }
}

export default App;
