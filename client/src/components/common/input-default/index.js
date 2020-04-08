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
  .input-group input:valid + label,
  .input-group input.has-value + label {
    top: -10px;
    font-size: xx-small;
  }

  .icon {
    width: 25px;
    position: absolute;
    bottom: 10px;
  }
`;

export default ({ label, icon, name, value, onChange, isPassword }) => {
  return (
    <InputWrapper>
      <div class="input-group">
        <img class="icon" src={`https://img.icons8.com/ios/120/00AEEF/${icon}.png`}/>
        <input
          required
          type={!isPassword ? '' : 'password'}
          name={name}
          value={value}
          onChange={event => onChange(event)}
          class="input"
          autoComplete="off"
        />
        <label>{label}</label>
      </div>
    </InputWrapper>
  )
}
