import { ReactNode, useState } from 'react'
import { Container } from './styles'
import { SideBar } from '../SideBar'
import { LoginModal } from '../LoginModal'
import { BookModal } from '../BookModal'

interface PageBaseProps {
  children: ReactNode
}

export function PageBase({ children }: PageBaseProps) {
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [bookModalOpen, setBookModalOpen] = useState(true)

  return (
    <Container>
      <SideBar openLoginModal={() => setLoginModalOpen(true)} />

      <main>{children}</main>

      <LoginModal
        isOpen={loginModalOpen}
        handleClose={() => setLoginModalOpen(false)}
      />

      <BookModal
        isOpen={bookModalOpen}
        handleClose={() => setBookModalOpen(false)}
      />
    </Container>
  )
}
