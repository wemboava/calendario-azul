import React, {
  useRef,
  useState,
  useCallback,
} from 'react';

import { Container, InputWrapper } from './styles';

interface IProps {
  name: string
  label: string
  formik: any
  placeholder?: string
  type?: string
}

const Input = ({ name, placeholder, label, formik, type }: IProps) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // setIsFilled(!!inputRef?.current?.value);
  }, []);

  return (
    <Container>
      <label>{label || " "}</label>
      <InputWrapper isFilled={isFilled} isFocused={isFocused}>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          name={name}
          onChange={formik.handleChange}
          value={formik.values[name]}
          placeholder={placeholder}
          type={type || 'text'}
          lang="pt-BR"
        />
      </InputWrapper>
    </Container>
  );
};

export default Input;