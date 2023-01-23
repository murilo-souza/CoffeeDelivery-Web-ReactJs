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

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Value = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

export const Description = styled.h5`
  font-size: 0.875rem;
  font-weight: 400;
`

export const Money = styled.span`
  font-size: 1rem;
  font-weight: 400;
`
export const Total = styled.h4`
  font-size: 1.25rem;
  color: ${(props) => props.theme.baseSubtitle};
`

export const CheckoutButton = styled.button`
  height: 2.875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  border: 0;

  background-color: ${(props) => props.theme.yellow};

  margin-top: 1.5rem;
`

export const CheckoutTitle = styled.h5`
  font-size: 0.875rem;

  text-transform: uppercase;

  color: ${(props) => props.theme.white};
`
