import { Container } from './styles'

interface CategoryChipsProps {
  isSelected?: boolean
}

export function CategoryChips({ isSelected }: CategoryChipsProps) {
  return (
    <Container isSelected={isSelected}>
      <span>Tudo</span>
    </Container>
  )
}
