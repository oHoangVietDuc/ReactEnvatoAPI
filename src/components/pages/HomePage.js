import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from '../user/UserInfo';

const HomePage = () => (
  <main className="main-content d-flex justify-content-center align-items-center">
    <div className="container">
      <UserInfo />
      <div className="mb-30">&nbsp;</div>
      <div className="nav-main text-center">
        <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/sales/report`}>This is version trial. Click here</Link>
      </div>
    </div>
  </main>
);

export default HomePage;
