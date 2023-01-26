import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled(RadioGroup.Item)`
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

  &:not(:disabled)[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background-color: ${(props) => props.theme.baseHover};
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme.purpleLight};
    border: 1px solid ${(props) => props.theme.purple};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const Title = styled.span`
  text-transform: uppercase;

  font-size: 0.75rem;
  font-weight: 400;
`
