import { Container, Label } from './styles'

export enum State {
  Cancelado,
  Deferido,
  Indeferido,
}

export function StateChip({ label, color, background }: any) {
  return (
    <Container css={{ background }}>
      <Label css={{ color }}>{label}</Label>
    </Container>
  )
}
