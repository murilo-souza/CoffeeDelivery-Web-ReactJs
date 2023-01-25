import styled from 'styled-components'

export const InputContainer = styled.input`
  height: 2.625rem;

  border: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 4px;

  background-color: ${(props) => props.theme.baseInput};
  color: ${(props) => props.theme.baseText};

  padding: 0.75rem;

  font-size: 0.875rem;
  font-weight: 400;

  &::placeholder {
    color: ${(props) => props.theme.baseLabel};
  }

  &::focus {
    color: ${(props) => props.theme.yellow};
  }
`
