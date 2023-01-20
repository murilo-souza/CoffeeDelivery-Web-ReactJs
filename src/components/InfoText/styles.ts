import styled, { css } from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface BackgroundIconProps {
  variant: 'purple' | 'yellow' | 'yellowDark' | 'grayDark'
}

export const BackgroundIcon = styled.div<BackgroundIconProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant }) =>
    variant === 'grayDark' &&
    css`
      background-color: ${(props) => props.theme.baseText};
    `}

  ${({ variant }) =>
    variant === 'purple' &&
    css`
      background-color: ${(props) => props.theme.purple};
    `}

    ${({ variant }) =>
    variant === 'yellow' &&
    css`
      background-color: ${(props) => props.theme.yellow};
    `}

    ${({ variant }) =>
    variant === 'yellowDark' &&
    css`
      background-color: ${(props) => props.theme.yellowDark};
    `}

  border-radius: 99999px;
`

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 400;
`
