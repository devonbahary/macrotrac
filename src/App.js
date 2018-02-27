import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Scene from './Common/Scene';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
              <BrowserRouter>
                  <Scene />
              </BrowserRouter>
          </div>
        );
    }
}

export default App;
