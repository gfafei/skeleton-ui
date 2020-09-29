import React from 'react'
import ButtonDemo from "../button/demo";
import './demo.less'
import Router from "../components/router";

const demos = {
  button: <ButtonDemo />
}
const App = () => {
  return (
    <div className="demo-app">
      <div className="demo-menu">
        {
          Object.keys(demos).map(demo => (
            <a key={demo} className="menu-item" href={`#${demo}`}>{demo}</a>
          ))
        }
      </div>
      <div className="demo-main">
        {
          Object.keys(demos).map(demo => (
            <Router key={demo} path={`#${demo}`}>{demos[demo]}</Router>
          ))
        }
      </div>
    </div>
  )
}

export default App;
