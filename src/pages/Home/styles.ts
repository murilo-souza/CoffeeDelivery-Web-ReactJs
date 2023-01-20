import styled from 'styled-components'
import BackgroundImage from '../../assets/Background.png'

export const Container = styled.main`
  margin-top: 5.875rem;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover; */
`
export const Image = styled.img`
  width: 29.75rem;
  height: 22.5rem;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.baseTitle};
  line-height: 1.3;
  margin-bottom: 1rem;
`

export const Subtitle = styled.span`
  font-size: 1.25rem;
  color: ${(props) => props.theme.baseSubtitle};
  line-height: 1.3;
  font-weight: 400;
  margin-bottom: 4.125rem;
`

export const InfoTextContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 2.5rem;
`
