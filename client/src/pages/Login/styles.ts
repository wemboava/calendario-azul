import styled from 'styled-components';

import Cover from '../../images/autismo-cover.jpg';

export const Container = styled.div`
  height: 100%;
  @media(min-width: 768px) {
    background: url(${Cover});
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
