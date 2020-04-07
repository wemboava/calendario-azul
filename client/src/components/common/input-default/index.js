import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
	.input-group {
		margin-bottom: 35px;
		position: relative;
	}

  .input {
    display: block;
    width: 100%;
    height: 30px;
    border: 0;
    border-bottom: 2px solid #ddd;
    padding: 1.2em 1.2em 1.2em 2.5em;
    font-size: 16px;
    box-sizing: border-box;
    background: none;
    outline: none;
    color: #78909c;
    transition: all 0.2s ease-in;
  }

  .input:focus {
    border-bottom: 2px solid #00AEEF;
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
    .input-group input:valid + label,
    .input-group input.has-value + label {
      top: -10px;
      font-size: xx-small;
    }

    .email {
      width: 25px;
      position: absolute;
      bottom: 10px;
    }
`;

export default ({ label, icon, isPassword }) => {
  return (
    <InputWrapper>
      <div class="input-group">
        <img class="email" src={`https://img.icons8.com/ios/120/00AEEF/${icon}.png`}/>
        <input required type={isPassword ? 'password' : 'text'} name="email" class="input" autocomplete="new-password" />
        <label>{label}</label>
      </div>
    </InputWrapper>
  )
}
