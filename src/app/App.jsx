import React from 'react'
import {hot} from "react-hot-loader";
import './App.css';
import ButtonDemo from '../components/button/demo'
import * as Demos from './Demo'
import Router from '../components/router'

const App = () => {
  return (
    <div className="App">
      <div className="app-menu">
        {
          Object.keys(Demos).map(demo => (
            <a href={`#${demo}`}>{demo}</a>
          ))
        }
      </div>
      <div className="main">
        {
          Object.values(Demos).map(Demo => (
            <Router path={`#${Demo.name}`}>{<Demo />}</Router>
          ))
        }
      </div>
    </div>
  )
}

export default hot(module)(App);
