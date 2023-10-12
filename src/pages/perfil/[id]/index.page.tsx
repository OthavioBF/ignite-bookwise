import { ReactElement } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { NextPageWithLayout } from '../../_app.page'

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
import { SystemAxios } from '@/services/api'

type Ratings = {
  id: string
  bookTitle: string
  bookAuthor: string
  bookCover: string
  rate: number
  rateDate: number
  bookSummary?: string
  biggerImage?: boolean
}

interface UserInfo {
  username: string
  avatarUrl: string
  created_at: string
  totalPages: string
  totalAssessments: string
  totalAuthorsRead: string
  categoryName: string
  memberSince: number
}

interface PerfilProps {
  userInfo: UserInfo
  ratings: Ratings[]
}

const Perfil: NextPageWithLayout<PerfilProps> = ({
  userInfo,
  ratings,
}: PerfilProps) => {
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
            {ratings.map((rate) => (
              <div key={rate.id}>
                <span>Há {rate.rateDate} dias</span>
                <BookCard data={rate} />
              </div>
            ))}
          </ScrollView>
        </ListContainer>

        <ProfileContainer>
          <header>
            <Image
              loader={() => userInfo.avatarUrl}
              src={userInfo.avatarUrl}
              width={72}
              height={72}
              alt=""
            />

            <strong>{userInfo.username}</strong>

            <span>membro desde {userInfo.memberSince}</span>
          </header>

          <div>.</div>

          <footer>
            <div>
              <BookOpen size={32} />
              <div>
                <strong>{userInfo.totalPages}</strong>

                <span>Páginas lidas</span>
              </div>
            </div>
            <div>
              <Books size={32} />
              <div>
                <strong>{userInfo.totalAssessments}</strong>

                <span>Livros avaliados</span>
              </div>
            </div>
            <div>
              <UserList size={32} />
              <div>
                <strong>{userInfo.totalAuthorsRead}</strong>

                <span>Autores lidos</span>
              </div>
            </div>
            <div>
              <BookmarkSimple size={32} />
              <div>
                <strong>{userInfo.categoryName}</strong>

                <span>Categoria mais lida</span>
              </div>
            </div>
          </footer>
        </ProfileContainer>
      </Content>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await SystemAxios.get('/perfil', {
    params: {
      id: params?.id,
    },
  })

  console.log('data', data)

  return {
    props: {
      userInfo: data.userInfo,
      ratings: data.ratings,
    },
    revalidate: 60 * 60 * 12, // 12 horas
  }
}

Perfil.getLayout = function getLayout(page: ReactElement) {
  return <PageBase>{page}</PageBase>
}

export default Perfil
