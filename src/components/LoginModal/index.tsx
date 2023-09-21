interface LoginModalProps {
  isOpen: boolean
}

export function LoginModal({ isOpen }: LoginModalProps) {
  return <Container isOpen={isOpen}></Container>
}
