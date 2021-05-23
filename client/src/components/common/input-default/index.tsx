import React, { useEffect, useRef } from "react";
import styled from 'styled-components';

interface IStyles {
  isLastField?: boolean
}

interface IProps {
  label?: string
  icon?: string
  name: string
  type?: string
  value?: string
  isLastField?: boolean
  isPassword?: boolean
  formik: any
}

const InputWrapper = styled.div<IStyles>`
	.input-group {
    margin-bottom: ${props => props.isLastField ? '0' : '35px'};
    position: relative;

    & span {
      position: absolute;
      color: #FF4747;
      font-size: 0.9em;
    }
	}

  .input:not([type = "radio"]) {
    display: block;
    width: 100%;
    height: 30px;
    border: 0;
    border-bottom: 1px solid #b1b1b1;
    padding: 1.2em 1.2em 1.2em 2.5em;
    font-size: 16px;
    box-sizing: border-box;
    background: none;
    outline: none;
    color: #555;
    transition: all 0.2s ease-in;
  }

  .input:focus {
    border-bottom: 1px solid #00AEEF;
  }

  label {
    position: absolute;
    top: 35%;
    left: 39px;
    color: #B0BEC5;
    pointer-events: none;
    font-size: medium;
    transition: all 0.3s ease;
  }

  .input-group input:focus + label,
  .input-group input:focus + span + label,
  .input-group input:valid + label,
  .input-group input:valid + span + label,
  .input-group input.has-value + label {
    top: -10px;
    font-size: xx-small;
  }

  .icon {
    width: 25px;
    position: absolute;
    bottom: 9px;
  }

  input[type = "radio"] {
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
  }
`;

export default ({ label, icon, name, isLastField, type = 'text', formik, ...rest }: IProps) => {
  return (
    <InputWrapper isLastField={isLastField}>
      <div className="input-group">
        {icon && <img className="icon" src={`https://img.icons8.com/ios/120/00AEEF/${icon}.png`}/>}
        <input  
          type={type}
          name={name}
          className="input"
          autoComplete="off"
          required
          onChange={formik.handleChange}
          value={formik.values.email}
          {...rest}
        />
        {label && <label>{label}</label>}
      </div>
    </InputWrapper>
  )
}