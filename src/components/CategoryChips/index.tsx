import { Categories } from '@/pages/explorar/index.page'
import { Container } from './styles'
import { ComponentProps } from 'react'

interface CategoryChipsProps extends ComponentProps<typeof Container> {
  isSelected?: boolean
  data: Categories
}

export function CategoryChips({
  isSelected,
  data,
  ...rest
}: CategoryChipsProps) {
  return (
    <Container isSelected={isSelected} {...rest}>
      <span>{data.name}</span>
    </Container>
  )
}
