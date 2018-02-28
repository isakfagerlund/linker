import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    window.location.replace("http://stackoverflow.com");
  }

  render() {
    return (
      <div className="App">
        <h1>Linker</h1>
        <button onClick={this.redirect}>Redirect</button>
      </div>
    );
  }
}

export default App;
