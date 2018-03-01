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
    const linksReversed = links.sort(function(a, b) {
      return b._id - a._id;
    });
    return <Links links={linksReversed} />;
  }
}

function mapStateToProps(state) {
  const { links } = state;
  return {
    links
  };
}

export default connect(mapStateToProps)(AllLinks);
