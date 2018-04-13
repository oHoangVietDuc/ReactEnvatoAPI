import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserInfo = ({ user }) => (
  <div className="user-info">
    <div className="user-info__wrap">
      <div className="row">
        <div className="col col-md-5">
          <div className="user-info__image">
            <img className="img-fluid" alt={user.firstname} src={user.image} />
          </div>
        </div>
        <div className="col col-md-7">
          <div className="user-info__content">
            <h2 className="user-info__name">{user.firstname} {user.surname}</h2>
            <div className="user-info__text">Country: {user.country}</div>
            <div className="user-info__money">Your balance: <span>${user.balance}</span></div>
            <div className="user-info__money">Toltal deposits: <span>${user.total_deposits}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

UserInfo.propTypes = {
  user: PropTypes.shape().isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(UserInfo);
