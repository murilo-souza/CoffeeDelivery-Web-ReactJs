import styled from 'styled-components'

export const Container = styled.main`
  padding-top: 8.5rem;
  display: flex;
  gap: 2rem;
`
export const Title = styled.h2`
  font-size: 1.125rem;
  color: ${(props) => props.theme.baseSubtitle};
  margin-bottom: 1rem;
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeaderAddress = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 0.5rem;

  margin-bottom: 2rem;
`

export const HeaderSide = styled.div``

export const TitleAddress = styled.h4`
  font-size: 1rem;
  color: ${(props) => props.theme.baseSubtitle};
  font-weight: 400;
`

export const SubtitleAddress = styled.h4`
  font-size: 0.75rem;
  color: ${(props) => props.theme.baseText};
  font-weight: 400;
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const RightSide = styled.div``
