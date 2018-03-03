import React, { Component } from "react";
import "../styles/App.css";
import CreateNewLink from "../containers/CreateNewLink";
import AllLinks from "../containers/AllLinks";

class App extends Component {
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
