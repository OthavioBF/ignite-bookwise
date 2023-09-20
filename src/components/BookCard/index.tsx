import { ReactNode } from 'react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import { Container } from './styles'

import domain from '../../assets/domain-driven-design.png'

interface PageBaseProps {
  children: ReactNode
}

export function BookCard() {
  return (
    <Container>
      <Image src={domain} width={64} height={94} alt="" />

      <div>
        <header>
          <h1>A revolução dos bichos</h1>
          <span>George Orwell</span>
        </header>

        <footer>
          <Rating
            size={14}
            SVGstorkeWidth={1}
            SVGstrokeColor="#8381D9"
            emptyColor="transparent"
            fillColor="#8381D9"
          />
        </footer>
      </div>
    </Container>
  )
}
