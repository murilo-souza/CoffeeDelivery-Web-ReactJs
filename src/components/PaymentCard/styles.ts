import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};
  margin-bottom: 1.5rem;
`

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  margin-bottom: 1.5rem;
`

export const InfoContainer = styled.div`
  margin-bottom: 1.5rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.baseButton};

  padding: 0.5rem;

  border-radius: 6px;
  border: 0;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  p {
    font-weight: 400;
    font-size: 0.75rem;

    text-transform: uppercase;
  }
`
