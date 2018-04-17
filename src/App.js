import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { fetchCurrentUser } from './actions/auth';
import PrivateRouter from './components/common/PrivateRoute';
import GuestRoute from './components/common/GuestRoute';
import RootContainer from './containers/RootContainer';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import ReportPage from './components/pages/ReportPage';

class App extends React.Component {
  componentWillMount() {
    if (localStorage.VelaEnvatoToken) {
      this.props.fetchCurrentUser(localStorage.VelaEnvatoToken);
    }
  }

  render() {
    const { location } = this.props;
    return (
      <div className="app-container">
        <GuestRoute
          location={location}
          path={`${process.env.PUBLIC_URL}/login`}
          exact
          component={() => <RootContainer MainContent={LoginPage} />}
        />
        <PrivateRouter
          location={location}
          path={`${process.env.PUBLIC_URL}/`}
          exact
          component={() => <RootContainer MainContent={HomePage} />}
        />
        <PrivateRouter
          location={location}
          path={`${process.env.PUBLIC_URL}/sales/report`}
          exact
          component={() => <RootContainer MainContent={ReportPage} />}
        />
      </div>
    );
  }
}

App.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default connect(null, { fetchCurrentUser })(App);
