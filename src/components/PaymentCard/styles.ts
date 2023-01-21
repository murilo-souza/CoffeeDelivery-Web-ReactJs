import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.header`
  display: flex;
  gap: 5rem;
  margin-bottom: 0.5rem;
`
export const Title = styled.span`
  color: ${(props) => props.theme.baseSubtitle};
  font-size: 1rem;
  font-weight: 400;
`
export const Money = styled.span`
  color: ${(props) => props.theme.baseText};
  font-size: 1rem;
`

export const Footer = styled.footer`
  display: flex;
  gap: 0.5rem;
`
