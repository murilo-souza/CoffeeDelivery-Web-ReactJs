import styled, { css } from 'styled-components'

interface BoxProps {
  side: 'left' | 'right'
}

export const Container = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.baseCard};

  ${({ side }) =>
    side === 'left' &&
    css`
      border-radius: 6px;
      width: 40rem;
    `}

  ${({ side }) =>
    side === 'right' &&
    css`
      border-radius: 6px 44px 6px 44px;
      width: 28rem;
    `}
    margin-bottom: 0.75rem;
`
