import React from "react";
import "./style.scss"

class App extends React.Component {
  render() {
    return (
      <div style={{color: "blue"}} className="box">
        Hello React
        <span>I am Jack.</span>
      </div>
    )
  }
}

export default App;