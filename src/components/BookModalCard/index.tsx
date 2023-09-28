import { ReactNode } from 'react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import { Container, Content, InfoContainer, TitleContainer } from './styles'

import { BookOpen, BookmarkSimple } from 'phosphor-react'

interface PageBaseProps {
  hasDescription?: boolean
  biggerImage?: boolean
}

export function BookModalCard({ hasDescription, biggerImage }: PageBaseProps) {
  return (
    <Container>
      <Content>
        <Image src="" width={171} height={242} alt="" />

        <InfoContainer>
          <TitleContainer>
            <h1>A revolução dos bichos A revolução dos bichos</h1>
            <span>George Orwell</span>
          </TitleContainer>

          <div>
            <Rating
              size={18}
              SVGstorkeWidth={1}
              SVGstrokeColor="#8381D9"
              emptyColor="transparent"
              fillColor="#8381D9"
              readonly
            />
            <span>3 avaliações</span>
          </div>
        </InfoContainer>
      </Content>

      <footer>
        <div>
          <BookmarkSimple size={24} />
          <div>
            <span>Categoria</span>
            <strong>Computação, educação</strong>
          </div>
        </div>
        <div>
          <BookOpen size={24} />
          <div>
            <span>Páginas</span>

            <strong>3853</strong>
          </div>
        </div>
      </footer>
    </Container>
  )
}
