import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import worker from './task1.js';
import WebWorker from './workerSetup';


class App extends Component {

  componentDidMount = () => {
    this.worker = new WebWorker(worker);
    this.worker.postMessage('Start Thread');
	}

  render() {

    
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
