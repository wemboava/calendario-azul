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
    this.props.handleLoader();

    AuthService.login(data)
      .then(response => {
        setTimeout(() => {
          this.props.handleLoader();
          this.props.history.push('/');
        }, 1500);
      })
      .catch(error => {
        setTimeout(() => {
          this.props.handleLoader();
          this.props.history.push('/');
        }, 1500);
      })
  }

  render () {
    const { showSession, handleShow } = this.props;

    return (
      <Content showSession={showSession}>
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
            label="Usuário"
            icon="user-male"
            name="email"
          />
          <InputDefault
            label="Senha"
            icon="password--v1"
            name="password"
            isPassword
          />
        </Form>

        <div className="login-footer">
          <div className="login-footer__login-button">
            <button form="login-form" type="submit">Entrar</button>
          </div>
          <span>Ainda não tem conta?</span>
          <a onClick={() => handleShow('showRegister')}>
            Cadastre-se!
          </a>
        </div>
      </Content>
    )
  }
}

export default Login;
