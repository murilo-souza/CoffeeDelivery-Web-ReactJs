import React from 'react'
import { BackgroundIcon, InfoContainer, Title } from './styles'
import { IconProps } from 'phosphor-react'
import { useTheme } from 'styled-components'

interface InfoTextProps {
  title: string
  icon: React.ElementType<IconProps>
}

export function InfoText({ title, icon: Icon }: InfoTextProps) {
  const theme = useTheme()

  return (
    <InfoContainer>
      <BackgroundIcon>
        <Icon size={16} weight="fill" color={theme.background} />
      </BackgroundIcon>
      <Title>{title}</Title>
    </InfoContainer>
  )
}
