import { ReactElement, useState } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { Binoculars, MagnifyingGlass, X } from 'phosphor-react'

import { ChipsContainer, Container, Content, ExploreHeader } from './styles'

import { PageBase } from '@/components/PageBase'
import { BookCard } from '@/components/BookCard'
import { CategoryChips } from '@/components/CategoryChips'
import { GetStaticProps } from 'next'
import { SystemAxios } from '@/services/api'

export type Categories = {
  id: string
  name: string
}

export type CatalogCategories = {
  book_id: string
  categoryId: string
}

export type Catalog = {
  id: string
  bookTitle: string
  bookAuthor: string
  bookCover: string
  rate: number
  categories: CatalogCategories[]
  bookSummary?: string
  biggerImage?: boolean
}

interface ExploreProps {
  data: {
    catalog: Catalog[]
    categories: Categories[]
  }
}

const Explorar: NextPageWithLayout<ExploreProps> = ({ data }: ExploreProps) => {
  const [catalog, setCatalog] = useState<Catalog[]>(data.catalog)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  function handleFilterByCategory(id: string) {
    if (selectedCategories.includes(id)) {
      setSelectedCategories((state) => state.filter((catId) => catId !== id))

      if (selectedCategories.length === 1) {
        setCatalog(data.catalog)
      }

      return
    }

    if (selectedCategories.length > 0) {
      setCatalog(
        data.catalog.filter((book) =>
          book.categories.some(
            (c) =>
              selectedCategories.includes(c.categoryId) || c.categoryId === id,
          ),
        ),
      )

      setSelectedCategories((state) => [...state, id])

      return
    }

    setCatalog(
      data.catalog.filter((book) =>
        book.categories.some((c) => c.categoryId === id),
      ),
    )

    setSelectedCategories((state) => [...state, id])
  }

  function handleFilterWithInput(value: string) {
    if (value === '') setCatalog(data.catalog)

    console.log(value)
    setCatalog(data.catalog.filter((book) => book.bookAuthor === value))
  }

  return (
    <Container>
      <ExploreHeader>
        <div>
          <Binoculars size={24} />
          <h1>Explorar</h1>
        </div>
        <label>
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            onChangeCapture={(e) =>
              handleFilterWithInput(e.currentTarget.value)
            }
          />
          <MagnifyingGlass size={20} />
        </label>
      </ExploreHeader>

      <ChipsContainer>
        <CategoryChips isSelected={true} data={{ id: '1', name: 'Tudo' }} />
        {data.categories.map((category) => (
          <CategoryChips
            key={category.id}
            isSelected={selectedCategories.includes(category.id)}
            data={category}
            onClick={() => handleFilterByCategory(category.id)}
          />
        ))}
        <div>
          <button
            onClick={() => {
              setCatalog(data.catalog)
              setSelectedCategories([])
            }}
          >
            <X size={24} />
          </button>
        </div>
      </ChipsContainer>
      <Content>
        {catalog.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
      </Content>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await SystemAxios.get('/explorar')

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 12, // 12 horas
  }
}

Explorar.getLayout = function getLayout(page: ReactElement) {
  return <PageBase>{page}</PageBase>
}

export default Explorar
