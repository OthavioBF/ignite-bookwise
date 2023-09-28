import { ReactNode } from 'react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import { Container } from './styles'

import { PopularBooks } from '@/pages/home/index.page'

type BookCard = {
  id: string
  bookTitle: string
  bookAuthor: string
  bookCover: string
  rate: number
  bookSummary?: string
  biggerImage?: boolean
}

interface BookCardProps {
  data: BookCard
}

export function BookCard({ data }: BookCardProps) {
  return data?.bookSummary ? (
    <Container hasDescription={!!data?.bookSummary}>
      <main>
        <Image src={data.bookCover} width={98} height={134} alt="" />

        <div>
          <header>
            <h1>{data.bookTitle}</h1>
            <span>{data.bookAuthor}</span>
          </header>

          <footer>
            <Rating
              size={14}
              SVGstorkeWidth={1}
              SVGstrokeColor="#8381D9"
              emptyColor="transparent"
              fillColor="#8381D9"
              readonly
              initialValue={data.rate}
            />
          </footer>
        </div>
      </main>
      <footer>
        <p>{data.bookSummary}</p>
      </footer>
    </Container>
  ) : (
    <>
      {data?.biggerImage ? (
        <Container>
          <Image src={data.bookCover} width={108} height={152} alt="" />

          <div>
            <header>
              <h1>{data.bookTitle}</h1>
              <span>{data.bookAuthor}</span>
            </header>

            <footer>
              <Rating
                size={14}
                SVGstorkeWidth={1}
                SVGstrokeColor="#8381D9"
                emptyColor="transparent"
                fillColor="#8381D9"
                readonly
                initialValue={data.rate}
              />
            </footer>
          </div>
        </Container>
      ) : (
        <Container>
          <Image src={data.bookCover} width={64} height={94} alt="" />

          <div>
            <header>
              <h1>{data.bookTitle}</h1>
              <span>{data.bookAuthor}</span>
            </header>

            <footer>
              <Rating
                size={14}
                SVGstorkeWidth={1}
                SVGstrokeColor="#8381D9"
                emptyColor="transparent"
                fillColor="#8381D9"
                readonly
                initialValue={data.rate}
              />
            </footer>
          </div>
        </Container>
      )}
    </>
  )
}
