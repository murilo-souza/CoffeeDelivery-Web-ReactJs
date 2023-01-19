import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`

export const PurchaseInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  background-color: ${(props) => props.theme.purpleLight};

  border-radius: 8px;

  p {
    color: ${(props) => props.theme.purpleDark};
    font-weight: 400;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background-color: ${(props) => props.theme.yellowLight};
  padding: 0.5rem;

  border-radius: 8px;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.yellowDark};
  }
`
