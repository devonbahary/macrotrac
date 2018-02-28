import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Scene from './Common/Scene';
import logo from './logo.svg';
import './App.css';

function App(props) {
    return (
      <div className="App">
          <BrowserRouter>
              <Scene />
          </BrowserRouter>
      </div>
    );
}

export default App;
