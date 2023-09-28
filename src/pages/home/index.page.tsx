import Image from 'next/image'
import {
  AssessmentsContainer,
  BookCardContainer,
  Container,
  Header,
  LastReadContainer,
  PopularBooksContainer,
  RecentAssessmentsContainer,
} from './styles'
import { NextPageWithLayout } from '../_app.page'
import { ReactElement } from 'react'
import { PageBase } from '@/components/PageBase'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import { BookCardDetaild } from '@/components/BookCardDetaild'
import { BookCard } from '@/components/BookCard'
import { GetServerSideProps } from 'next'
import { SystemAxios } from '@/services/api'

export type RecentRates = {
  id: string
  username: string
  userAvatar: string
  rateDate: number
  rate: number
  bookCover: string
  bookTitle: string
  bookAuthor: string
  bookSummary: string
}

export type PopularBooks = {
  id: string
  bookTitle: string
  bookAuthor: string
  bookCover: string
  rate: number
  bookSummary?: string
  biggerImage?: boolean
}

interface HomeProps {
  data: {
    recentRates: RecentRates[]
    popularBooks: PopularBooks[]
  }
}

const Home: NextPageWithLayout<HomeProps> = ({ data }: HomeProps) => {
  return (
    <Container>
      <div>
        <Header>
          <ChartLineUp size={24} />
          <h1>Inicio</h1>
        </Header>
        <AssessmentsContainer>
          <LastReadContainer>
            <div>
              <span>Sua última leitura</span>
              <button>
                Ver todas <CaretRight />
              </button>
            </div>
          </LastReadContainer>
          <RecentAssessmentsContainer>
            <div>
              <span>Avaliações mais recentes</span>
            </div>
            {data.recentRates.map((rate) => (
              <BookCardDetaild key={rate.id} data={rate} />
            ))}
          </RecentAssessmentsContainer>
        </AssessmentsContainer>
      </div>

      <PopularBooksContainer>
        <div>
          <span>Livros populares</span>
          <button>
            Ver todos <CaretRight />
          </button>
        </div>

        <BookCardContainer>
          {data.popularBooks.map((book) => (
            <BookCard key={book.id} data={book} />
          ))}
        </BookCardContainer>
      </PopularBooksContainer>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await SystemAxios.get('/home')

  console.log('data', data)

  return {
    props: {
      data,
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PageBase>{page}</PageBase>
}

export default Home
