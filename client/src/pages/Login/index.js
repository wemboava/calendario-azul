import React, { Component } from 'react';

import LoginContent from '../../components/login';
import RegisterContent from '../../components/register';

import { Container, Content } from './styles';
import { Loader } from '../../components/common';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  render () {
    const { isLoading } = this.state;
    return (
      <Container>
        <Content>
          {/* <LoginContent /> */}
          <RegisterContent />
        </Content>
        <Loader isActivity={isLoading} />
      </Container>
    )
  }
}

export default Login;
