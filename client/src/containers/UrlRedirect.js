import React, { Component } from "react";

class UrlRedirect extends Component {
  componentWillMount() {
    const match = true;
    if (match) {
      window.location.replace("http://stackoverflow.com");
    } else {
      this.props.history.push("/404");
    }
  }

  render() {
    return <p>Redirecting...</p>;
  }
}

export default UrlRedirect;
