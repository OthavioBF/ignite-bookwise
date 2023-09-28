import { ReactNode } from 'react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import { Container, Content, TextArea } from './styles'

import { Check, X } from 'phosphor-react'

interface CommentProps {
  closeComment: () => void
}

export function Comment({ closeComment }: CommentProps) {
  return (
    <Container>
      <header>
        <div>
          <Image src="" width={40} height={40} alt="" />
          <strong>Jaxson Dias</strong>
        </div>

        <Rating
          size={24}
          SVGstorkeWidth={1}
          SVGstrokeColor="#8381D9"
          emptyColor="transparent"
          fillColor="#8381D9"
        />
      </header>

      <Content>
        <TextArea placeholder="Escreva sua avaliação" />
      </Content>

      <footer>
        <button onClick={closeComment}>
          <X size={24} color="#8381D9" />
        </button>
        <button>
          <Check size={24} color="#50B2C0" />
        </button>
      </footer>
    </Container>
  )
}
