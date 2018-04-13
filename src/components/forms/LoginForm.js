import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Login } from '../../actions/auth';

class LoginForm extends React.Component {
  state = {
    token: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.Login(this.state.token);
  }

  render() {
    const { token } = this.state;
    return (
      <form className="form-login" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="ion-ios-locked" />
              </div>
            </div>
            <input
              onChange={this.handleChange}
              value={token}
              className="form-control"
              name="token"
              type="text"
              placeholder="Personal Tokens"
            />
          </div>
          <a
            className="form-login__create-token"
            href="https://build.envato.com/create-token/"
            target="_blank"
            rel='noopener noreferrer'
          >Generate a personal token</a>
        </div>
        <div className="form-button">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    );
  }
};

LoginForm.propTypes = {
  Login: PropTypes.func.isRequired
}

export default connect(null, { Login })(LoginForm);
