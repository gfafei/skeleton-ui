import React from 'react'
import {hot} from "react-hot-loader";
import './App.less';
import * as Demos from './Demo'
import Router from '../components/router'

const App = () => {
  return (
    <div className="App">
      <div className="app-menu">
        {
          Object.keys(Demos).map(demo => (
            <a key={demo} className="menu-item" href={`#${demo}`}>{demo}</a>
          ))
        }
      </div>
      <div className="app-main">
        {
          Object.values(Demos).map(Demo => (
            <Router key={Demo.name} path={`#${Demo.name}`}>{<Demo />}</Router>
          ))
        }
      </div>
    </div>
  )
}

export default hot(module)(App);
