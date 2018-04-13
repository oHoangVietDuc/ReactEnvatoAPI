import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';

const LoginPage = (props) => {
  const { loading } = props;
  return (
    <main className={`main-content main-content--login ${loading && 'main-content--loading'} d-flex justify-content-center align-items-center`}>
      {loading && <div className="loader" />}
      <div className="login-page">
        <LoginForm />
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  loading: state.user.loading
});

LoginPage.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, null)(LoginPage);
