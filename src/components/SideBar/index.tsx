import { ReactNode, useState } from 'react'
import Image from 'next/image'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'

import Logo from '../../assets/Logo.svg'
import {
  Container,
  FooterContent,
  NavigationButton,
  SectionsContainer,
  SideBarFooter,
  SideBarHeader,
} from './styles'
import { useRouter } from 'next/router'

interface SideBarProps {
  openLoginModal: () => void
}

export function SideBar({ openLoginModal }: SideBarProps) {
  const [selectedRoute, setSelectedRoute] = useState('home')

  const router = useRouter()

  const logged = false

  function handleNavigate(route: string) {
    router.push(`/app/${route}`)

    setSelectedRoute(route)
  }

  return (
    <Container>
      <SideBarHeader>
        <Image src={Logo} width={128} height={32} alt="" />

        <SectionsContainer>
          <NavigationButton
            active={selectedRoute === 'home'}
            onClick={() => handleNavigate('home')}
          >
            <div>.</div>
            <ChartLineUp size={24} />
            <strong>Início</strong>
          </NavigationButton>
          <NavigationButton
            active={selectedRoute === 'explorar'}
            onClick={() => handleNavigate('explorar')}
          >
            <div>.</div>

            <Binoculars size={24} />
            <strong>Explorar</strong>
          </NavigationButton>
          <NavigationButton
            active={selectedRoute === 'perfil'}
            onClick={() => handleNavigate('perfil')}
          >
            <div>.</div>

            <User size={24} />
            <strong>Perfil</strong>
          </NavigationButton>
        </SectionsContainer>
      </SideBarHeader>

      <SideBarFooter>
        <FooterContent onClick={openLoginModal}>
          {logged ? (
            <>
              <Image src="" width={32} height={32} alt="" />
              <span>Cristopher</span>
              <SignOut size={20} color="#F75A68" />
            </>
          ) : (
            <>
              <span>Fazer login</span>
              <SignIn size={20} color="#50B2C0" />
            </>
          )}
        </FooterContent>
      </SideBarFooter>
    </Container>
  )
}
