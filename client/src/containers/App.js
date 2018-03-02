import React, { Component } from "react";
import "../styles/App.css";
import CreateNewLink from "../containers/CreateNewLink";
import AllLinks from "../containers/AllLinks";

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
        <CreateNewLink />
        <AllLinks />
      </div>
    );
  }
}

export default App;
