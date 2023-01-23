import styled, { css } from 'styled-components'

export const Container = styled.main`
  padding-top: 11.5rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div``

export const Title = styled.h1`
  color: ${(props) => props.theme.yellowDark};
  font-size: 2rem;
`

export const Subtitle = styled.h4`
  color: ${(props) => props.theme.baseSubtitle};
  font-size: 1.25rem;
`

export const Box = styled.div`
  margin-top: 2.5rem;

  border: 1px solid #ffff;

  border-radius: 6px 36px 6px 36px;
  border: double 1px transparent;

  background-image: linear-gradient(#ffff, #ffff),
    linear-gradient(
      145deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`
export const InsideBox = styled.div`
  padding: 2.5rem;
`
interface BackgroundIconProps {
  variant: 'purple' | 'yellow' | 'yellowDark'
}

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;

  :last-child {
    margin-bottom: 0;
  }
`

export const BackgroundIcon = styled.div<BackgroundIconProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

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

  svg {
    color: ${(props) => props.theme.background};
  }
`

export const TextContainer = styled.div``

export const InfoTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;

  span {
    font-weight: bold;
  }
`

interface InfoSubtitleProps {
  isBold: boolean
}

export const InfoSubtitle = styled.span<InfoSubtitleProps>`
  font-size: 1rem;
  color: ${(props) => props.theme.baseText};
  ${({ isBold }) =>
    isBold === false &&
    css`
      font-weight: 400;
    `}
`

export const RightSide = styled.div``

export const Image = styled.img``
