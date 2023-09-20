import { ReactNode } from 'react'
import { Container } from './styles'
import { SideBar } from '../SideBar'

interface PageBaseProps {
  children: ReactNode
}

export function PageBase({ children }: PageBaseProps) {
  return (
    <Container>
      <SideBar />
      <main>{children}</main>
    </Container>
  )
}
