import React, { Component } from "react";
import "../styles/App.css";
import Header from "../components/Header"
import CreateNewLink from '../containers/CreateNewLink'

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
        <Header />
        <button onClick={this.redirect}>Redirect</button>
        <CreateNewLink />
      </div>
    );
  }
}

export default App;
