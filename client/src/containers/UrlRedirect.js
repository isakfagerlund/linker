import React, { Component } from "react";
import axios from "axios";

class UrlRedirect extends Component {
  componentWillMount() {
    const url = this.props.location.pathname;
    const hash = url.substring(url.lastIndexOf("/") + 1);
    axios.get(`/v1/${hash}`).then(response => {
      if (response.data.error) {
        this.props.history.push("/404");
      } else {
        console.log(response.data);
        if (
          response.data.includes("http://") ||
          response.data.includes("https://")
        ) {
          window.location.replace(response.data);
        } else {
          window.location.replace("http://" + response.data);
        }
      }
    });
  }

  render() {
    return <p>Redirecting...</p>;
  }
}

export default UrlRedirect;
