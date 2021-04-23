import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useFormik } from 'formik';

import { Content } from './styles';
import UserService from '../../services/user';
import { InputDefault } from '../common';

interface IProps {
  showSession: boolean
  handleShow: (data: string) => void
  handleLoader: (status?: boolean) => void
}

const Register: React.FC<IProps> = ({ showSession, handleShow, handleLoader }) => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      nameRegister: '',
      emailRegister: '',
      passwordRegister: '',
      gender: ''
    },
    onSubmit: data => {
      handleLoader(true);
      const {
        nameRegister,
        emailRegister,
        passwordRegister,
        gender
      } = data;

      UserService.create({ name: nameRegister, email: emailRegister, password: passwordRegister, gender })
        .then((response: any) => {
          setTimeout(() => {
            handleLoader(false);
            handleShow('showLogin')
          }, 1500);
        })
        .catch((error: any) => {
          setTimeout(() => {
            handleLoader(false);
          }, 1500);
        })
      },
    }
  );

  return (
    <Content showSession={showSession}>
      <div className="logo-wrapper">
        <img src={require('../../images/logo-with-label.svg').default} />
      </div>

      <form
        onSubmit={formik.handleSubmit}
        id="register-form"
        autoComplete="off"
      >
        <InputDefault
          label="Nome"
          icon="user-male"
          name="nameRegister"
          formik={formik}
        />
        <InputDefault
          label="Email"
          icon="email"
          name="emailRegister"
          type="email"
          formik={formik}
        />
        <InputDefault
          label="Senha"
          icon="password--v1"
          name="passwordRegister"
          type="password"
          formik={formik}
        />
        <div className="radio">
          <div className="radio__buttons">
            <label>
              <span>Feminino</span>
              <InputDefault
                name="gender"
                type="radio"
                value="female"
                formik={formik}
              />
            </label>
            <label>
              <span>Masculino</span>
              <InputDefault
                name="gender"
                type="radio"
                value="male"
                formik={formik}
              />
            </label>
          </div>
        </div>
      </form>

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

export default Register;
