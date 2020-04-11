import React, { Component } from 'react';

import LoginContent from '../../components/login';
import RegisterContent from '../../components/register';

import { Container, Content } from './styles';
import { Loader } from '../../components/common';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showLogin: true,
      showRegister: false,
    }
  }

  handleShow = nextSession => {
    const { showLogin, showRegister } = this.state;
    const sessions = [
      {
        showLogin,
        isActivity: showLogin
      },
      {
        showRegister,
        isActivity: showRegister
      }
    ];

    const currentSession = Object.keys(sessions.find(session => session.isActivity))[0]

    this.setState({ [currentSession]: false })
    setTimeout(() => {
      this.setState({ [nextSession]: true })
    }, 400)
  }

  handleLoader = () => {
    this.setState({ isLoading: !this.state.isLoading })
  }

  render () {
    const { isLoading, showLogin, showRegister } = this.state;

    return (
      <Container>
        <Content>
          <LoginContent
            handleLoader={this.handleLoader}
            handleShow={this.handleShow}
            showSession={showLogin}
            history={this.props.history}
          />
          <RegisterContent
            handleLoader={this.handleLoader}
            handleShow={this.handleShow}
            showSession={showRegister}
          />
        </Content>
        <Loader isActivity={isLoading} />
      </Container>
    )
  }
}

export default Login;
