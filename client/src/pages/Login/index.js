import React, { Component } from 'react';
import { Container, Content } from './styles';
import AuthService from '../../services/auth';
import { InputDefault, Loader } from '../../components/common';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    const { email, password } = this.state;

    this.setState({ isLoading: true })

    AuthService.login({ email, password })
      .then(response => {
        setTimeout(() => {
          this.setState({ isLoading: false })
        }, 1500);
      })
      .catch(error => {
        setTimeout(() => {
          this.setState({ isLoading: false })
        }, 1500);
      })
  }

  render () {
    const { email, password, isLoading } = this.state;
    return (
      <Container>
        <Content>
          <div className="logo-wrapper">
            <img src={require('../../images/logo-with-label.svg')} />
          </div>

          <form autoComplete="off">
            <InputDefault
              label="Usuário"
              icon="user-male"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <InputDefault
              label="Senha"
              icon="password--v1"
              name="password"
              value={password}
              onChange={this.handleChange}
              isPassword
            />
          </form>

          <div className="login-footer">
            <div className="login-footer__login-button">
              <button onClick={this.handleSubmit}>Entrar</button>
            </div>
            <span>Ainda não tem conta?</span>
            <button>Cadastre-se!</button>
          </div>
        </Content>
        <Loader isActivity={isLoading} />
      </Container>
    )
  }
}

export default Login;
