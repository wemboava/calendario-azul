import styled from 'styled-components';

const Header = styled.header`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: rgb(0,171,236);
  background: linear-gradient(0deg, rgba(0,171,236,1) 0%, rgba(0,129,200,1) 100%);
  @media(min-width: 768px) {
    padding: 0 40px;
  }
  .logo {
    height: 30px;
  }
  .nav {
    &__options {
      &__item {
        & > a {
          color: #FFF;
          font-weight: 500;
        }
      }
    }
  }
`;

export { Header };
