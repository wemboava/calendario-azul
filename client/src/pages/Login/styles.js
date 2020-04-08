import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  @media(min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    background: url(${require('../../images/autismo-cover.jpg')});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 35px 50px 35px;

  @media(min-width: 768px) {
    width: 40%;
    max-width: 450px;
    min-width: 350px;
    background-color: #fff;
    box-shadow: -3px 0px 13px 1px rgba(0, 0, 0, 0.15);
  }
  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    /* margin-top: 150px; */
  }

  .login-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__login-button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      & > button {
        display: block;
        width: 200px;
        border: none;
        border-radius: 35px;
        padding: 14px;
        box-shadow: 0 5px 17px -2px rgba(0, 174, 239, 0.5);
        text-shadow: 1px 1px 3px rgba(63, 81, 181, 0.7);
        color: #fff;
        font-size: 1.3em;
        cursor: pointer;
        font-weight: bold;
        outline: none;
        transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
        background: #00AEEF;
      }
      & > button:active, & > button:hover{
        background-color: #0081C8;
        box-shadow: 0 5px 17px -2px rgba(0,129,200,0.5);
      }
    }

    & span {}
    & > button {
      color: #0081C8;
      border: none;
      background-color: transparent;
      font-weight: bold;
      padding: 5px;
      cursor: pointer;
    }
  }
`;
