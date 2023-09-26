import { ReactNode } from 'react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import { Container, Content } from './style'

import domain from '../../assets/domain-driven-design.png'

interface CommentsCardProps {
  hasDescription?: boolean
  biggerImage?: boolean
}

export function CommentsCard({
  hasDescription,
  biggerImage,
}: CommentsCardProps) {
  return (
    <Container>
      <header>
        <div>
          <Image src={domain} width={40} height={40} alt="" />
          <div>
            <strong>Jaxson Dias</strong>
            <span>Há 2 dias</span>
          </div>
        </div>

        <Rating
          size={14}
          SVGstorkeWidth={1}
          SVGstrokeColor="#8381D9"
          emptyColor="transparent"
          fillColor="#8381D9"
          readonly
        />
      </header>
      <Content>
        <p>
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </p>
      </Content>
    </Container>
  )
}
