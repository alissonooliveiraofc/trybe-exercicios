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
    this.setState((prevState) => ({
      botaoUm: prevState.botaoUm + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.botaoUm)}`);
    });
  }

  handleButtonTwo() {
    this.setState((prevState) => ({
      botaoDois: prevState.botaoDois + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.botaoDois)}`);
    });
  }

  handleButtonThree() {
    this.setState((prevState) => ({
      botaoTres: prevState.botaoTres + 1,
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(this.state.botaoTres)}`);
    });
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { botaoUm, botaoDois, botaoTres } = this.state;
    return (
      <div>
        <button
        onClick={ () =>this.handleButtonOne() }
        style={ {backgroundColor: this.getButtonColor(botaoUm)} }
        >
          {`Cliques botão 1: ${botaoUm}`}
        </button>

        <button
        style={ {backgroundColor: this.getButtonColor(botaoDois)} }
        onClick={ () => this.handleButtonTwo() }
        >
          {`Cliques botão 2: ${botaoDois}`}
        </button>

        <button
        style={ {backgroundColor: this.getButtonColor(botaoTres)} }
        onClick={ () =>this.handleButtonThree() }
        >
          {`Cliques no Botão 3: ${botaoTres}`}
        </button>
      </div>
    );
  }
}

export default App;