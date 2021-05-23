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
}

const Input = ({ name, placeholder, label, formik }: IProps) => {
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
        <select
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          
          name={name}
          onChange={formik.handleChange}
          value={formik.values.time_course}
          placeholder={placeholder}
        >
          <option value="">Não repete</option>
          <option value="daily">Diária</option>
          <option value="weekly">Semanal</option>
          <option value="monthly">Mensal</option>
          <option value="yearly">Anual</option>
        </select>
      </InputWrapper>
    </Container>
  );
};

export default Input;