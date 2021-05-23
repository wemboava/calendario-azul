import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './styles';

export default () => {
  return (
    <Header>
      <img className="logo" src={require('../../../images/white-logo.png').default} />
      <nav className="nav">
        <ul className="nav__options">
          <li className="nav__options__item">
            <Link to="/login">
              <a>
                Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </Header>
  )
}
