import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme.baseButton};

  margin-right: 0.5rem;

  border-radius: 6px;
`

export const Quantity = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.baseTitle};
`

export const QuantityAction = styled.button`
  all: unset;
  color: ${(props) => props.theme.purple};
  cursor: pointer;
`
