import { ReactElement } from 'react'
import { NextPageWithLayout } from '../../_app.page'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'

import { ChipsContainer, Container, Content, ExploreHeader } from './styles'

import { PageBase } from '@/components/PageBase'
import { BookCard } from '@/components/BookCard'
import { CategoryChips } from '@/components/CategoryChips'

const Explorar: NextPageWithLayout = () => {
  return (
    <Container>
      <ExploreHeader>
        <div>
          <Binoculars size={24} />
          <h1>Explorar</h1>
        </div>
        <label>
          <input type="text" placeholder="Buscar livro ou autor" />
          <MagnifyingGlass size={20} />
        </label>
      </ExploreHeader>

      <ChipsContainer>
        <CategoryChips isSelected />
        <CategoryChips />
        <CategoryChips />
        <CategoryChips />
        <CategoryChips />
      </ChipsContainer>
      <Content>
        <BookCard biggerImage />
        <BookCard biggerImage />
        <BookCard biggerImage />
        <BookCard biggerImage />
        <BookCard biggerImage />
        <BookCard biggerImage />
        <BookCard biggerImage />
        <BookCard biggerImage />
        <BookCard biggerImage />
        <BookCard biggerImage />
        <BookCard biggerImage />
      </Content>
    </Container>
  )
}

Explorar.getLayout = function getLayout(page: ReactElement) {
  return <PageBase>{page}</PageBase>
}

export default Explorar
