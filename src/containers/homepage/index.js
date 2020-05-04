import React, { Component, useEffect } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import * as actions from './constants';
import withProgressBar from '../../components/ProgressBar/with-progressBar';
import Title from '../../components/Title';

import './styles.css';

const HomePage = ({ showProgressBar, pageLoading, pageLoaded }) => {

  useEffect(() => {
    showProgressBar(true);
    pageLoading();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      showProgressBar(false);
      pageLoaded();
    }, 100);
  }, []);

  return (
    <div className="home__container">

      <div className="home__first centered-full-page">
        <Fade bottom>
          <Title text="Solinqui Digital" />
        </Fade>
      </div>

      <div className="home__second centered-full-page">
        <Fade bottom>
          <Title text="second" />
        </Fade>
      </div>

      <div className="home__third centered-full-page">
        <Fade bottom>
          <Title text="thirs" />
        </Fade>
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: state.homePage.isLoading,
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch({ type: actions.HOME_PAGE_LOADING }),
  pageLoaded: () => dispatch({ type: actions.HOME_PAGE_LOADED }),
});

export default compose(
  withProgressBar,

  connect(mapStateToProps, mapDispatchToProps),
)(HomePage);