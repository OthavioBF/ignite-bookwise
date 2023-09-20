import { ReactNode } from 'react'
import { Container } from './styles'
import { SideBar } from '../SideBar'

export function PageBase({ children }: ReactNode) {
  return (
    <Container>
      <SideBar />
      <main>{children}</main>
    </Container>
  )
}
