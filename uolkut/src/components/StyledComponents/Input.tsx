import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  background-color: var(--input-background-color);
  padding: 12px 16px;
  border-radius: 8px;

  &::placeholder {
    font-size: 14px;
    color: var(--placeholder-color);
  }
`;

export default Input;
