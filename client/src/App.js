import React from 'react';
import { Router } from 'react-router-dom';

import SessionService from './services/session'
import history from './services/history'
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  SessionService.configAxios();
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
