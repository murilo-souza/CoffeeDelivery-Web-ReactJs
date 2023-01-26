import { Clock, MapPin } from 'phosphor-react'
import {
  BackgroundIcon,
  Box,
  Container,
  Header,
  Image,
  InfoContainer,
  InfoSubtitle,
  InfoTitle,
  InsideBox,
  LeftSide,
  RightSide,
  Subtitle,
  TextContainer,
  Title,
} from './styles'
import DeliveryMan from '../../assets/deliveryMan.png'
import { useCoffee } from '../../hooks/useCoffee'

export function Success() {
  const { orderInfo } = useCoffee()
  return (
    <Container>
      <LeftSide>
        <Header>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
        </Header>
        <Box>
          <InsideBox>
            <InfoContainer>
              <BackgroundIcon variant="purple">
                <MapPin weight="fill" size={16} />
              </BackgroundIcon>
              <TextContainer>
                <InfoTitle>
                  Entrega em{' '}
                  <span>
                    {orderInfo.street}, {orderInfo.houseNumber}
                  </span>
                </InfoTitle>
                <InfoSubtitle isBold={false}>
                  {orderInfo.district} - {orderInfo.city}, {orderInfo.uf}
                </InfoSubtitle>
              </TextContainer>
            </InfoContainer>

            <InfoContainer>
              <BackgroundIcon variant="yellow">
                <Clock weight="fill" size={16} />
              </BackgroundIcon>
              <TextContainer>
                <InfoTitle>Previsão de entrega</InfoTitle>
                <InfoSubtitle isBold={true}>20 min - 30 min</InfoSubtitle>
              </TextContainer>
            </InfoContainer>

            <InfoContainer>
              <BackgroundIcon variant="yellowDark">
                <MapPin weight="fill" size={16} />
              </BackgroundIcon>
              <TextContainer>
                <InfoTitle>Pagamento na entrega</InfoTitle>
                {orderInfo.type === 'credit' && (
                  <InfoSubtitle isBold={true}>Cartão de Credito</InfoSubtitle>
                )}
                {orderInfo.type === 'debit' && (
                  <InfoSubtitle isBold={true}>Cartão de Débito</InfoSubtitle>
                )}
                {orderInfo.type === 'money' && (
                  <InfoSubtitle isBold={true}>Dinheiro</InfoSubtitle>
                )}
              </TextContainer>
            </InfoContainer>
          </InsideBox>
        </Box>
      </LeftSide>
      <RightSide>
        <Image src={DeliveryMan} alt="" />
      </RightSide>
    </Container>
  )
}
