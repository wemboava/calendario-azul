import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@rocketseat/unform';

import { Content } from './styles';
import UserService from '../../services/user';
import { InputDefault } from '../common';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
})

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  handleSubmit = data => {
    this.props.handleLoader();

    UserService.create(data)
      .then(response => {
        setTimeout(() => {
          this.props.handleLoader();
          this.props.handleShow('showLogin')
        }, 1500);
      })
      .catch(error => {
        setTimeout(() => {
          this.props.handleLoader();
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
          id="register-form"
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
        </Form>

        <div className="login-footer">
          <div className="login-footer__login-button">
            <button form="register-form" type="submit">Criar conta</button>
          </div>
          <span>Ja tem uma conta?</span>
          <a onClick={() => handleShow('showLogin')}>
            Entrar
          </a>
        </div>
      </Content>
    )
  }
}

export default Register;
