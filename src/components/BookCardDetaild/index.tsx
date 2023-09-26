import { ReactNode } from 'react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'

import {
  Container,
  ContainerMoreDetails,
  Content,
  InfoContainer,
} from './styles'
import domain from '../../assets/domain-driven-design.png'

interface PageBaseProps {
  children: ReactNode
}

export function BookCardDetaild() {
  const moreDetails = true

  return moreDetails ? (
    <ContainerMoreDetails>
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
        <Image src={domain} width={108} height={152} alt="" />

        <InfoContainer>
          <div>
            <h1>A revolução dos bichos</h1>
            <span>George Orwell</span>
          </div>
          <footer>
            <p>
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet
              lectu...
            </p>
          </footer>
        </InfoContainer>
      </Content>
    </ContainerMoreDetails>
  ) : (
    <Container>
      <Image src={domain} width={108} height={152} alt="" />

      <InfoContainer>
        <header>
          <span>Há 2 dias</span>
          <Rating
            size={14}
            SVGstorkeWidth={1}
            SVGstrokeColor="#8381D9"
            emptyColor="transparent"
            fillColor="#8381D9"
            readonly
          />
        </header>
        <div>
          <h1>A revolução dos bichos</h1>
          <span>George Orwell</span>
        </div>
        <footer>
          <p>
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectu...
          </p>
        </footer>
      </InfoContainer>
    </Container>
  )
}
