import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import * as actions from './constants';
import withProgressBar from '../../components/ProgressBar/with-progressBar';

class ContactPage extends Component {
  constructor() {
    super()
    this.state = {};
  }

  componentWillMount() {
    this.props.showProgressBar(true);
    this.props.pageLoading();
  }

  componentDidMount() {
    this.props.pageLoaded();
    setTimeout(() => {
      this.props.showProgressBar(false);
    }, 100)
  }

  render() {
    return (
      <div>
        <h1>Contact Page</h1>
        <p> is a thing and stuff... every signed-in user.</p>
      </div>
    )
  }
}

const condition = authUser => !!authUser;

const mapStateToProps = state => ({
  isLoading: state.ContactPage.isLoading,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch({ type: actions.CONTACT_PAGE_LOADING }),
  pageLoaded: () => dispatch({ type: actions.CONTACT_PAGE_LOADED }),
});

export default compose(
  withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(ContactPage);