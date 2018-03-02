import React, { Component } from "react";
import { connect } from "react-redux";
import Links from "../components/Links";
import { fetchAllLinks, fetchLinkAndDelete } from "../actions";

class AllLinks extends Component {
  constructor(props) {
    super(props);
    this.deleteLink = this.deleteLink.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllLinks());
  }

  deleteLink(url) {
    const { dispatch } = this.props;
    console.log("deleteLink");
    console.log(url);
    dispatch(fetchLinkAndDelete(url));
  }

  render() {
    const { links } = this.props;
    const linksReversed = links.sort(function(a, b) {
      return b._id - a._id;
    });
    return <Links links={linksReversed} deleteLink={this.deleteLink} />;
  }
}

function mapStateToProps(state) {
  const { links } = state;
  return {
    links
  };
}

export default connect(mapStateToProps)(AllLinks);
