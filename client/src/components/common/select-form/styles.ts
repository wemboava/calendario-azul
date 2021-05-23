import styled, { css } from 'styled-components';

interface IStyles {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div`
  width: -webkit-fill-available;
  align-self: flex-end;
  margin-bottom: 10px;
  & > label {
    display: block;
    margin: 5px 0;
  }
`;

export const InputWrapper = styled.div<IStyles>`
  height: 45px;
  background: #eef4fb;
  border-radius: 10px;
  padding: 13px;
  width: 100%;
  border: 2px solid #eef4fb;
  color: #000;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 15px;
  }
  transition: color 0.2s;
  transition: border-color 0.2s;
  & > img {
    width: 25px;
  }
  ${(props) =>
    props.isFocused &&
    css`
      color: #4b68ed;
      border-color: #00abec;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #4b68ed;
    `}
  select {
    flex: 1;
    background: transparent;
    border: 0;
    color: #555;
    font-size: 16px;
    padding-top: 2px;
    font-weight: 300;
    &::placeholder {
      color: #c1c1c1;
    }
    & + input {
      margin-top: 8px;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  height: 16px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;