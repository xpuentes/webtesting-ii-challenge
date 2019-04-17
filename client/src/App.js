import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import './App.css';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  }

  ballCount = e => {
    let count = this.state.balls + 1;
    if(count === 4){
      this.setState({balls: 0});
    } else {
      this.setState({balls: count})
    }
  };

  strikeCount = e => {
    let count = this.state.strikes + 1;
    if(count === 3){
      this.setState({strikes: 0});
    } else {
      this.setState({strikes: count});
    }
  };

  hitCount = e => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  foulCount = e => {
    if(this.state.strikes === 2){
      return;
    }
    let count = this.state.strikes + 1;
    this.setState({strikes: count});
  };

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
        <Dashboard ballCount={this.ballCount}
                   strikeCount={this.strikeCount}
                   hitCount={this.hitCount}
                   foulCount={this.foulCount}/>
      </div>
    );
  }
}

export default App;
