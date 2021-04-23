import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import { Content } from './styles';
import AuthService from '../../services/auth';
import SessionService from '../../services/session';
import { InputDefault } from '../common';

interface IProps {
  showSession: boolean
  handleShow: (data: string) => void
  handleLoader: (status?: boolean) => void
}

const Login: React.FC<IProps> = ({ showSession, handleShow, handleLoader }) => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      emailLogin: '',
      passwordLogin: '',
    },
    onSubmit: data => {
      handleLoader(true);

    AuthService.login({ email: data.emailLogin, password: data.passwordLogin })
      .then((response: any) => {
        console.log('client_token', response.data.token);
        SessionService.setCookie('client_token', { token: response.data.token })
        setTimeout(() => {
          handleLoader(false);
          history.push('/dashboard');
        }, 1500);
      })
      .catch((error: any) => {
        setTimeout(() => {
          handleLoader(false);
        }, 1500);
      })
    },
  });

  return (
    <Content showSession={showSession}>
      <div className="logo-wrapper">
        <img src={require('../../images/logo-with-label.svg').default} />
      </div>

      <form
        onSubmit={formik.handleSubmit}
        id="login-form"
        autoComplete="off"
      >
        <InputDefault
          label="Usuário"
          icon="user-male"
          name="emailLogin"
          formik={formik}
        />
        <InputDefault
          label="Senha"
          icon="password--v1"
          name="passwordLogin"
          formik={formik}
        />
      </form>

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

export default Login;
