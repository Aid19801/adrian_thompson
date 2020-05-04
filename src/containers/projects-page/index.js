import React, { Component, Suspense } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import * as actions from './constants';
import withProgressBar from '../../components/ProgressBar/with-progressBar';

const AsyncBigImage = React.lazy(() => import("../../components/BigImage"));

class ProjectsPage extends Component {
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
        <h1>Projects Page</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <AsyncBigImage />
        </Suspense>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.projectsPage.isLoading,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch({ type: actions.PROJECTS_PAGE_LOADING }),
  pageLoaded: () => dispatch({ type: actions.PROJECTS_PAGE_LOADED }),
});

export default compose(
  withProgressBar,
  connect(mapStateToProps, mapDispatchToProps),
)(ProjectsPage);