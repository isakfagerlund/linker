import React, { Component } from "react";
import { connect } from "react-redux";
import Links from "../components/Links";
import {
  fetchAllLinks,
  fetchLinkAndDelete,
  fetchLinkAndUpdate
} from "../actions";

class AllLinks extends Component {
  constructor(props) {
    super(props);
    this.deleteLink = this.deleteLink.bind(this);
    this.updateLink = this.updateLink.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllLinks());
  }

  deleteLink(hash) {
    const { dispatch } = this.props;
    dispatch(fetchLinkAndDelete(hash));
  }

  updateLink(hash, url) {
    const { dispatch } = this.props;
    dispatch(fetchLinkAndUpdate(hash, url));
  }

  render() {
    const { links } = this.props;
    const linksReversed = links.sort(function(a, b) {
      return b._id - a._id;
    });
    return (
      <Links
        links={linksReversed}
        deleteLink={this.deleteLink}
        updateLink={this.updateLink}
      />
    );
  }
}

function mapStateToProps(state) {
  const { links } = state;
  return {
    links
  };
}

export default connect(mapStateToProps)(AllLinks);
