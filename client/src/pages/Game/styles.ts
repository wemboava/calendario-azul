import styled from 'styled-components';

export const Content = styled.div`
  padding: 40px 15px;
  .actions {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00abec;
  padding: 12px 25px 12px 15px;
  & > h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
  }
`;
