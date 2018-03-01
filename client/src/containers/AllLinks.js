import React, { Component } from "react";
import { connect } from "react-redux";
import Links from "../components/Links";
import { fetchAllLinks } from "../actions";

class AllLinks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllLinks());
  }

  render() {
    const { links } = this.props;
    return <Links links={links} />;
  }
}

function mapStateToProps(state) {
  const { links } = state;
  return {
    links
  };
}

export default connect(mapStateToProps)(AllLinks);
