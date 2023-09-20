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

import backgroundImg from '../../assets/Image.png'
import googleLogo from '../../assets/googleLogo.svg'
import githubLogo from '../../assets/githubLogo.svg'
import rocketLogo from '../../assets/rocketLogo.svg'
import { NextPageWithLayout } from '../../_app.page'
import { ReactElement } from 'react'
import { PageBase } from '@/components/PageBase'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import { BookCardDetaild } from '@/components/BookCardDetaild'
import { BookCard } from '@/components/BookCard'

const Home: NextPageWithLayout = () => {
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

            <BookCardDetaild />
          </LastReadContainer>
          <RecentAssessmentsContainer>
            <div>
              <span>Avaliações mais recentes</span>
            </div>
            <BookCardDetaild />
            <BookCardDetaild />
            <BookCardDetaild />
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
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </BookCardContainer>
      </PopularBooksContainer>
    </Container>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PageBase>{page}</PageBase>
}

export default Home
