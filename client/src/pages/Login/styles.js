import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  @media(min-width: 768px) {
    background: url(${require('../../images/autismo-cover.jpg')});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const Content = styled.div`
  height: 100%;
  @media(min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;
