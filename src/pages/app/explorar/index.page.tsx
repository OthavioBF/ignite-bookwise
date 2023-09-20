import Image from 'next/image'
import {
  Container,
  ImageContainer,
  LoginCard,
  LoginCardContainer,
  LoginContaier,
  LoginContent,
} from './styles'

import backgroundImg from '../../assets/Image.png'
import googleLogo from '../../assets/googleLogo.svg'
import githubLogo from '../../assets/githubLogo.svg'
import rocketLogo from '../../assets/rocketLogo.svg'
import { NextPageWithLayout } from '../../_app.page'
import { ReactElement } from 'react'
import { PageBase } from '@/components/PageBase'

const Explorar: NextPageWithLayout = () => {
  return (
    <Container>
      <h1>Explorar</h1>
    </Container>
  )
}

Explorar.getLayout = function getLayout(page: ReactElement) {
  return <PageBase>{page}</PageBase>
}

export default Explorar
