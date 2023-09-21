import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  background-color: var(--input-background-color);
  padding: 24px 32px;
  border-radius: 8px;
  resize: none;

  &::placeholder {
    font-size: 14px;
    color: var(--placeholder-color);
  }
`;

export default TextArea;
