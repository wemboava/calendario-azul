import styled from 'styled-components';

const Header = styled.header`
  height: 50px;
  width: 100%;
  padding: 0 20px;
  background: rgb(0,171,236);
  background: linear-gradient(0deg, rgba(0,171,236,1) 0%, rgba(0,129,200,1) 100%);

  display: flex;
  align-items: center;

  position: fixed;
  bottom: 0;
  .nav {
    width: 100%;
    &__options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__item {
        &--main-button {
          height: 50px;
          width: 150px;
          background: #FFF;
          display: flex;
          justify-content: center;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            width: 190.5px;
            height: 51px;
            background-image: url(${require('../../../images/menu-base.svg')});
            background-repeat: no-repeat;
            border-top: 1px solid #FFF;
            bottom: 0;
            z-index: 4;
          }
          & a {
            width: 60px;
            height: 60px;
            background: linear-gradient(0deg, rgba(0,171,236,1) 0%, rgba(0,129,200,1) 100%);
            border-radius: 50%;
            margin-top: -25px;
            z-index: 5;
          }
        }
        & a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          & span {
            color: #FFF;
            font-weight: 500;
            font-size: .7em;
            margin-top: 2px;
          }
        }
      }
    }
  }
`;

export { Header };
