// src/App.js
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      botaoUm : 0,
      botaoDois : 0,
      botaoTres: 0
    }

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne() {
    this.setState(({botaoUm}) => ({
      botaoUm: botaoUm + 1
    }))
  }

  handleButtonTwo() {
    this.setState((prevState) => ({
      botaoDois: prevState.botaoDois + 1
    }))
  }

  handleButtonThree() {
    this.setState(({botaoTres}) => ({
      botaoTres: botaoTres + 1
    }))
  }
  render() {
    const { botaoDois, botaoTres } = this.state;
    return (
      <div>
        <button onClick={ this.handleButtonOne }>{this.state.botaoUm}</button>
        <button onClick={ this.handleButtonTwo }>{botaoDois}</button>
        <button onClick={ this.handleButtonThree }>{`Cliques no Botão 3: ${botaoTres}`}</button>
      </div>
    );
  }
}

export default App;