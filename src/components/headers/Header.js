import React from 'react';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__content">
        <div className="header-logo text-center">
          <a className="header-logo__link d-inline" href="/">
            <img className="img-fluid header-logo__image" src="/images/logo.png" alt="Logo" />
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
