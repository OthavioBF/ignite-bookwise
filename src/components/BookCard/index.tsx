import { ReactNode } from 'react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import { Container } from './styles'

import domain from '../../assets/domain-driven-design.png'

interface PageBaseProps {
  hasDescription?: boolean
  biggerImage?: boolean
}

export function BookCard({ hasDescription, biggerImage }: PageBaseProps) {
  return hasDescription ? (
    <Container hasDescription={hasDescription}>
      <main>
        <Image src={domain} width={98} height={134} alt="" />

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
      </main>
      <footer>
        <p>
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </p>
      </footer>
    </Container>
  ) : (
    <>
      {biggerImage ? (
        <Container>
          <Image src={domain} width={108} height={152} alt="" />

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
      ) : (
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
      )}
    </>
  )
}
