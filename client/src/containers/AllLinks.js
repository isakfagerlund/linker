import React, { Component } from "react";
import PropTypes from "prop-types";
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

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllLinks());
  }

  deleteLink(hash) {
    const { dispatch } = this.props;

    const check = window.confirm("Are you sure you want to delete this link?");
    if (check) {
      dispatch(fetchLinkAndDelete(hash));
    }
  }

  updateLink(hash) {
    const { dispatch } = this.props;

    const url = prompt("Please enter the new Url", "");
    if (url != null) {
      dispatch(fetchLinkAndUpdate(hash, url));
    }
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

AllLinks.propTypes = {
  links: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(AllLinks);
