import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import WinButton from './components/WinButton';
import SymbolButton from './components/SymbolButton';
import button from './images/button.png';
import RollService from './services/RollService';
import { setTimeout } from 'timers';

class App extends Component {

  constructor() {
    super();
    this.delay = 2000;
    this.defaultWinType = "Loading...";
    this.state = {
      WinType: "",
      RollNumbers: [-1, -1, -1],
      HasBonus: false
    }
  }

  handleClick = () => {

    this.setState({
      WinType: this.defaultWinType,
      RollNumbers: this.state.RollNumbers
    }, this.GetRollNumbers);
  }

  GetRollNumbers() {
    RollService.GetRollNumbers((data) => {
      this.setState({
        RollNumbers: data.RollNumbers,
        WinType: data.WinType,
        HasBonus: data.HasBonus
      }, () => {
        if (this.state.HasBonus) {
          setTimeout(() => this.GetRollNumbers(), this.delay)
        }
      });
    });
  }

  GetSymbols() {
    return this.state.RollNumbers.map((number, index) =>
      <SymbolButton key={index} value={number} />
    );
  }

  ShouldDisabled(){
    return (this.state.WinType === this.defaultWinType) || this.state.HasBonus;
  }

  render() {
    return (
      <div className="App">
        <Header text={this.state.WinType} />
        {this.GetSymbols()}
        <br />
        <WinButton alt="click to win" disabled={this.ShouldDisabled()} src={button} action={this.handleClick} />
      </div>
    );
  }
}

export default App;
