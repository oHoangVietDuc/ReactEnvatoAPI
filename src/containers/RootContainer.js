import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/headers/Header';
import Footer from '../components/footers/Footer';

const RootContainer = ({ MainContent }) => (
  <div className="page-container page-container--root">
    <Header />
    <MainContent />
    <Footer />
  </div>
);

RootContainer.propTypes = {
  MainContent: PropTypes.func.isRequired
};

export default RootContainer;
