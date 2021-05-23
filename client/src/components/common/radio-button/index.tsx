import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 20px;
  height: 20px;  

  transition: .3s;
  appearance: none;
  background: #C4C4C4;
  box-shadow: inset 0 0 0 0.4em #FFF, 0 0 0 0.1em #b1b1b1;
  border-radius: 50%;  
  cursor:pointer;
  /* color: #C4C4C4; */

  &:hover {
    background: linear-gradient(167deg, #0081C8, #00AEEF);
    box-shadow: inset 0 0 0 .3em #FFF, 0 0 0 1.5px #b1b1b1;
  }
  
  &:checked {
    background: linear-gradient(167deg, #0081C8, #00AEEF);
    box-shadow: inset 0 0 0 .2em #FFF, 0 0 0 1.5px #b1b1b1;
  } 

  &:focus { outline: 0; }
`

interface IProps {
  onChange?: () => void
}

const RadioButton: React.FC<IProps> = ({ onChange }) => {
  return (
    <Input type="radio" name="gender" onChange={onChange} />
  )
}

export default RadioButton;