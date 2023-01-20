import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const BackgroundIcon = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.baseTitle};

  border-radius: 99999px;
`

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 400;
`
