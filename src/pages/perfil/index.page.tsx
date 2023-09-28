import { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { NextPageWithLayout } from '../_app.page'

import {
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  User,
  UserList,
} from 'phosphor-react'

import {
  Container,
  Content,
  ListContainer,
  PerfilHeader,
  ProfileContainer,
  ScrollView,
} from './styles'

import { PageBase } from '@/components/PageBase'
import { BookCard } from '@/components/BookCard'
import { api } from '@/services/api'

interface PerfilProps {
  response: any[]
}

const Perfil: NextPageWithLayout = () => {
  return (
    <Container>
      <PerfilHeader>
        <div>
          <User size={24} />
          <h1>Perfil</h1>
        </div>
      </PerfilHeader>
      <Content>
        <ListContainer>
          <label>
            <input type="text" placeholder="Buscar livro ou autor" />
            <MagnifyingGlass size={20} />
          </label>
          <ScrollView>
            <div>
              <span>Há 2 dias</span>
              <BookCard hasDescription />
            </div>
            <div>
              <span>Há 2 dias</span>
              <BookCard hasDescription />
            </div>
            <div>
              <span>Há 2 dias</span>
              <BookCard hasDescription />
            </div>
          </ScrollView>
        </ListContainer>

        <ProfileContainer>
          <header>
            <Image src="" width={72} height={72} alt="" />

            <strong>Cristofer Rosser</strong>

            <span>membro desde 2019</span>
          </header>

          <div>.</div>

          <footer>
            <div>
              <BookOpen size={32} />
              <div>
                <strong>3853</strong>

                <span>Páginas lidas</span>
              </div>
            </div>
            <div>
              <Books size={32} />
              <div>
                <strong>3853</strong>

                <span>Livros avaliados</span>
              </div>
            </div>
            <div>
              <UserList size={32} />
              <div>
                <strong>3853</strong>

                <span>Autores lidos</span>
              </div>
            </div>
            <div>
              <BookmarkSimple size={32} />
              <div>
                <strong>3853</strong>

                <span>Categoria mais lida</span>
              </div>
            </div>
          </footer>
        </ProfileContainer>
      </Content>
    </Container>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await api.get('/perfil')

//   return {
//     props: {
//       response,
//     },
//     revalidate: 60 * 60 * 12, // 12 horas
//   }
// }

Perfil.getLayout = function getLayout(page: ReactElement) {
  return <PageBase>{page}</PageBase>
}

export default Perfil
