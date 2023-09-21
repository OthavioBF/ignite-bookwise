import Image from 'next/image'
import { X } from 'phosphor-react'

import googleLogo from '../../assets/googleLogo.svg'
import githubLogo from '../../assets/githubLogo.svg'

import {
  Container,
  LoginCard,
  LoginCardContainer,
  ModalContent,
} from './styles'
import { useState } from 'react'

interface LoginModalProps {
  isOpen: boolean
  handleClose: () => void
}

export function LoginModal({ isOpen, handleClose }: LoginModalProps) {
  return (
    <Container isOpen={isOpen}>
      <ModalContent>
        <header>
          <button onClick={handleClose}>
            <X size={24} />
          </button>
        </header>

        <h1>Faça login para deixar sua avaliação</h1>

        <LoginCardContainer>
          <LoginCard>
            <Image src={googleLogo} width={32} height={32} alt="" />
            <strong>Entrar com Google</strong>
          </LoginCard>
          <LoginCard>
            <Image src={githubLogo} width={32} height={32} alt="" />
            <strong>Entrar com GitHub</strong>
          </LoginCard>
        </LoginCardContainer>
      </ModalContent>
    </Container>
  )
}
