import { ReactNode } from 'react'
import Image from 'next/image'
import { Binoculars, SignIn } from 'phosphor-react'

import Logo from '../../assets/Logo.svg'
import {
  Container,
  SectionsContainer,
  SideBarFooter,
  SideBarHeader,
} from './styles'

export function SideBar() {
  return (
    <Container>
      <SideBarHeader>
        <Image src={Logo} alt="" />

        <SectionsContainer>
          <Binoculars />
        </SectionsContainer>
      </SideBarHeader>

      <SideBarFooter>
        <h1>Fazer login</h1>
        <SignIn />
      </SideBarFooter>
    </Container>
  )
}
