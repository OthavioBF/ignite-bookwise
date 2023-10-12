import { ReactNode, useEffect, useState } from 'react'
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
import { useSession } from 'next-auth/react'

interface SideBarProps {
  openLoginModal: () => void
}

export function SideBar({ openLoginModal }: SideBarProps) {
  const [selectedRoute, setSelectedRoute] = useState('/home')

  const session = useSession()
  const router = useRouter()

  const logged = session.status === 'authenticated'

  const userInfo = session.data?.user

  console.log(session.data?.user)

  const currentRoute = router.route

  useEffect(() => {
    setSelectedRoute(currentRoute)
  }, [currentRoute])

  return (
    <Container>
      <SideBarHeader>
        <Image src={Logo} width={128} height={32} alt="" />

        <SectionsContainer>
          <NavigationButton
            active={selectedRoute === '/home'}
            onClick={() => router.push('/home')}
          >
            <div>.</div>
            <ChartLineUp size={24} />
            <strong>Início</strong>
          </NavigationButton>
          <NavigationButton
            active={selectedRoute === '/explorar'}
            onClick={() => router.push('/explorar')}
          >
            <div>.</div>

            <Binoculars size={24} />
            <strong>Explorar</strong>
          </NavigationButton>
          {logged && (
            <NavigationButton
              active={selectedRoute === '/perfil/[id]'}
              onClick={() => router.push(`/perfil/${userInfo?.name}`)}
            >
              <div>.</div>

              <User size={24} />
              <strong>Perfil</strong>
            </NavigationButton>
          )}
        </SectionsContainer>
      </SideBarHeader>

      <SideBarFooter>
        <FooterContent onClick={openLoginModal}>
          {logged ? (
            <>
              <Image
                loader={() => `${userInfo?.image}`}
                src={`/${userInfo?.image}`}
                width={32}
                height={32}
                alt=""
              />
              <span>{userInfo?.name}</span>
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
