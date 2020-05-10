import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Navigation from '../Navigation';

import { AboutPage, ProjectsPage, ContactPage, HomePage } from '../../containers';

import * as ROUTES from '../../constants/routes';

import * as actions from './constants';
import './styles.css';

const App = ({ appLoading, appLoaded }) => {

  
  useEffect(() => {
    appLoading();
  })

  useEffect(() => {
    appLoaded();
  })

  return (
    <Router>

      <div className="app__container">
        <Navigation />
  
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.PROJECTS} component={ProjectsPage} />
        <Route path={ROUTES.ABOUT} component={AboutPage} />
        <Route path={ROUTES.CONTACT} component={ContactPage} />
      </div>
    </Router>
    );
}

const mapStateToProps = state => ({
  isLoading: state.appState.isLoading,
  error: state.appState.error,
})

const mapDispatchToProps = dispatch => ({
  appLoading: () => dispatch({ type: actions.APP_LOADING }),
  appLoaded: () => dispatch({ type: actions.APP_LOADED }),
  appFailed: () => dispatch({ type: actions.APP_FAILED }),
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(App);