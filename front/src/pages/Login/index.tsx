import React, { useState } from 'react';

import LoginContent from '../../components/login';
import RegisterContent from '../../components/register';

import { Container, Content } from './styles';
import { Loader } from '../../components/common';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [showRegister, setShowRegister] = useState(false)

  const handleShow = (nextSession: string) => {
    const sessions = [
      {
        showLogin: setShowLogin,
        isActivity: showLogin
      },
      {
        showRegister: setShowRegister,
        isActivity: showRegister
      }
    ];

    const currentSession = Object.keys(sessions.find(session => session?.isActivity) || {})[0]

    currentSession === 'showLogin' ? setShowLogin(false) : setShowRegister(false)

    setTimeout(() => {
      nextSession === 'showLogin' ? setShowLogin(true) : setShowRegister(true)
    }, 400)
  }

  const handleLoader = (status = !loading) => {
    setLoading(status)
  }

  return (
    <Container>
        <Content>
          <LoginContent
            handleLoader={handleLoader}
            handleShow={handleShow}
            showSession={showLogin}
          />
          <RegisterContent
            handleLoader={handleLoader}
            handleShow={handleShow}
            showSession={showRegister}
          />
        </Content>
        <Loader isActivity={loading} />
      </Container>
  )
}

export default Login