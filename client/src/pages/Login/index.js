import React from 'react';
import { Container, Content } from './styles';
import { InputDefault } from '../../components/common';

export default Login => {
  return (
    <Container>
      <Content>
        <div className="logo-wrapper">
          <img src={require('../../images/logo-with-label.svg')} />
        </div>

        <form autoComplete="off">
          <InputDefault label="Usuário" icon="user-male" />
          <InputDefault label="Senha" icon="password--v1" isPassword />
        </form>

        <div className="login-footer">
          <div className="login-footer__login-button">
            <button>Entrar</button>
          </div>
          <span>Ainda não tem conta?</span>
          <button>Cadastre-se!</button>
        </div>
      </Content>
    </Container>
  )
}
