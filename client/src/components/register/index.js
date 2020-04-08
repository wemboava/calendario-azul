import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@rocketseat/unform';

import { Content } from './styles';
import AuthService from '../../services/auth';
import { InputDefault } from '../common';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  handleSubmit = data => {
    this.setState({ isLoading: true })

    AuthService.login(data)
      .then(response => {
        setTimeout(() => {
          this.setState({ isLoading: false })
          this.props.history.push('/');
        }, 1500);
      })
      .catch(error => {
        setTimeout(() => {
          this.setState({ isLoading: false })
        }, 1500);
      })
  }

  render () {
    return (
      <Content>
        <div className="logo-wrapper">
          <img src={require('../../images/logo-with-label.svg')} />
        </div>

        <Form
          onSubmit={this.handleSubmit}
          schema={schema}
          id="login-form"
          autoComplete="off"
        >
          <InputDefault
            label="Nome"
            icon="user-male"
            name="name"
          />
          <InputDefault
            label="Email"
            icon="email"
            name="email"
          />
          <InputDefault
            label="Senha"
            icon="password--v1"
            name="password"
            isPassword
          />
          <InputDefault
            label="Confirme sua senha"
            icon="password--v1"
            name="password"
            isLastField
            isPassword
          />
        </Form>

        <div className="login-footer">
          <div className="login-footer__login-button">
            <button form="login-form" type="submit">Salvar</button>
          </div>
          <span>Ja tem uma conta?</span>
          <Link to="/register">
            Entrar
          </Link>
        </div>
      </Content>
    )
  }
}

export default Login;
