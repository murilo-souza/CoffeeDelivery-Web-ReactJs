import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 0.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.baseCard};

  border-radius: 6px 36px 6px 36px;
`

export const CoffeeImg = styled.img`
  width: 7.5rem;
  height: 7.5rem;

  margin-top: -2rem;
  margin-bottom: 1.75rem;
`
export const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`

export const Tag = styled.p`
  padding: 0.25rem 0.5rem;

  /* display: flex;
  align-items: center;
  justify-content: center; */
  text-transform: uppercase;

  font-size: 0.65rem;
  color: ${(props) => props.theme.yellowDark};
  background-color: ${(props) => props.theme.yellowLight};

  border-radius: 100px;

  margin-bottom: 1rem;
`

export const InfoArea = styled.div`
  width: 13.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 1.25rem;
  color: ${(props) => props.theme.baseTitle};
  margin-bottom: 0.5rem;
`

export const Subtitle = styled.span`
  font-size: 0.75rem;
  text-align: center;
  color: ${(props) => props.theme.baseLabel};

  margin-bottom: 2rem;
`

export const PurchaseArea = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;
`

export const Price = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  margin-right: 1.25rem;

  color: ${(props) => props.theme.baseText};
  font-size: 0.75rem;

  h3 {
    font-size: 1.5rem;
  }
`

export const Actions = styled.div`
  display: flex;
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background-color: ${(props) => props.theme.purpleDark};
  padding: 0.5rem;

  border-radius: 8px;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.baseCard};
  }
`
