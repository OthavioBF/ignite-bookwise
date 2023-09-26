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
import { useRouter } from 'next/router'

export default function Landing() {
  const router = useRouter()

  return (
    <Container>
      <ImageContainer>
        <Image src={backgroundImg} width={598} height={912} alt="" />
      </ImageContainer>

      <LoginContaier>
        <LoginContent>
          <div>
            <h1>Boas vindas!</h1>

            <span>Faça seu login ou acesse como visitante.</span>
          </div>
          <LoginCardContainer>
            <LoginCard>
              <Image src={googleLogo} width={32} height={32} alt="" />
              <strong>Entrar com Google</strong>
            </LoginCard>
            <LoginCard>
              <Image src={githubLogo} width={32} height={32} alt="" />
              <strong>Entrar com GitHub</strong>
            </LoginCard>
            <LoginCard onClick={() => router.push('/app/home')}>
              <Image src={rocketLogo} width={32} height={32} alt="" />
              <strong>Acessar como visitante</strong>
            </LoginCard>
          </LoginCardContainer>
        </LoginContent>
      </LoginContaier>
    </Container>
  )
}
