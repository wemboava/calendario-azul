import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './styles';

export default () => {
  return (
    <Header>
      <nav className="nav">
        <ul className="nav__options">
          <div className="nav__options__wrapper" style={{ paddingLeft: '20px' }}>
            <li className="nav__options__item">
              <Link to="/login">
                <img src={require('../../../images/icons/perfil.svg')} />
                <span>Perfil</span>
              </Link>
            </li>
            <li className="nav__options__item">
              <Link to="/login">
                <img src={require('../../../images/icons/rotinas.svg')} />
                <span>Rotinas</span>
              </Link>
            </li>
          </div>

          <li className="nav__options__item nav__options__item--main-button">
            <Link to="/login">
              <img src={require('../../../images/icons/calendario.svg')} />
            </Link>
          </li>

          <div className="nav__options__wrapper" style={{ paddingRight: '20px' }}>
            <li className="nav__options__item">
              <Link to="/login">
                <img src={require('../../../images/icons/ranking.svg')} />
                <span>Ranking</span>
              </Link>
            </li>
            <li className="nav__options__item">
              <Link to="/login">
                <img src={require('../../../images/icons/ajustes.svg')} />
                <span>Ajustes</span>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </Header>
  )
}
