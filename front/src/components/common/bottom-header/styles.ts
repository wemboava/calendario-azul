import styled from 'styled-components';

const Header = styled.header`
  height: 50px;
  width: 100%;

  display: flex;
  align-items: center;

  position: fixed;
  bottom: 0;
  @media(min-width: 426px) {
    display: none;
  }
  .nav {
    width: 100%;
    &__options {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__wrapper {
        height: 50px;
        width: 33.33%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(0deg,rgba(0,171,236,1) 0%,rgba(0,129,200,1) 100%);
        z-index: 5;
      }

      &__item {
        min-height: 36px;
        display: flex;
        align-items: flex-end;
        &--main-button {
          height: 50px;
          width: 150px;
          display: flex;
          justify-content: center;
          position: relative;
          align-items: flex-start;
          &::before {
            content: '';
            position: absolute;
            width: 190.5px;
            height: 50px;
            background-image: url(${require('../../../images/menu-base.svg').default});
            background-repeat: no-repeat;
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
