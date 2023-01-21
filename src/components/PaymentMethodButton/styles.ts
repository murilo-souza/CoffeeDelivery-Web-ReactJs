import styled from 'styled-components'

export const Container = styled.button`
  height: 3rem;
  width: 11.25rem;

  display: flex;
  align-items: center;

  padding: 1rem;

  border-radius: 6px;
  border: 0;

  background-color: ${(props) => props.theme.baseButton};
  gap: 0.75rem;

  cursor: pointer;
`

export const Title = styled.span`
  text-transform: uppercase;

  font-size: 0.75rem;
  font-weight: 400;
`
