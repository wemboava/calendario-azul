import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 35px 35px 35px;

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
        text-shadow: 1px 1px 3px rgba(63, 81, 181, 0.7);
        color: #fff;
        font-size: 1.3em;
        cursor: pointer;
        font-weight: bold;
        outline: none;
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.15);
        transition: .8s cubic-bezier(.2,1,.2,1);
        /* background: #00AEEF; */
        background: linear-gradient(45deg,#0081C8,#00AEEF);
      }
      & > button:active, & > button:hover{
        /* background-color: #0081C8; */
        transform: translateY(-2px);
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.25);
      }
    }

    & span {}
    & > a {
      color: #0081C8;
      border: none;
      background-color: transparent;
      font-weight: bold;
      padding: 3px;
      cursor: pointer;
    }
  }
`;
