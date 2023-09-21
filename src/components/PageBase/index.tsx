import { ReactNode, useState } from 'react'
import { Container } from './styles'
import { SideBar } from '../SideBar'
import { LoginModal } from '../LoginModal'

interface PageBaseProps {
  children: ReactNode
}

export function PageBase({ children }: PageBaseProps) {
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  return (
    <Container>
      <SideBar openLoginModal={() => setLoginModalOpen(true)} />
      <main>{children}</main>

      <LoginModal
        isOpen={loginModalOpen}
        handleClose={() => setLoginModalOpen(false)}
      />
    </Container>
  )
}
