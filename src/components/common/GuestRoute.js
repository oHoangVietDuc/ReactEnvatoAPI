import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => !localStorage.user ? <Component {...props} /> : <Redirect to={`${process.env.PUBLIC_URL}/`} />}
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default GuestRoute;
