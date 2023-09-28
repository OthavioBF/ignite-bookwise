import { ReactNode } from 'react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'

import {
  Container,
  ContainerMoreDetails,
  Content,
  InfoContainer,
} from './styles'

import { RecentRates } from '@/pages/home/index.page'

interface BookCardDetaildProps {
  data: RecentRates
}

export function BookCardDetaild({ data }: BookCardDetaildProps) {
  return data?.username ? (
    <ContainerMoreDetails>
      <header>
        <div>
          <Image
            loader={() => data.userAvatar}
            src={data.userAvatar}
            width={40}
            height={40}
            alt=""
          />
          <div>
            <strong>{data.username}</strong>
            <span>Há {data.rateDate} dias</span>
          </div>
        </div>

        <Rating
          size={14}
          SVGstorkeWidth={1}
          SVGstrokeColor="#8381D9"
          emptyColor="transparent"
          fillColor="#8381D9"
          readonly
          initialValue={data.rate}
        />
      </header>
      <Content>
        <Image
          loader={() => data.bookCover}
          src={data.bookCover}
          width={108}
          height={152}
          alt=""
        />

        <InfoContainer>
          <div>
            <h1>{data.bookTitle}</h1>
            <span>{data.bookAuthor}</span>
          </div>
          <footer>
            <p>{data.bookSummary}</p>
          </footer>
        </InfoContainer>
      </Content>
    </ContainerMoreDetails>
  ) : (
    <Container>
      <Image
        loader={() => data.userAvatar}
        src={data.userAvatar}
        width={108}
        height={152}
        alt=""
      />

      <InfoContainer>
        <header>
          <span>Há {data.rateDate} dias</span>
          <Rating
            size={14}
            SVGstorkeWidth={1}
            SVGstrokeColor="#8381D9"
            emptyColor="transparent"
            fillColor="#8381D9"
            readonly
            initialValue={data.rate}
          />
        </header>
        <div>
          <h1>{data.bookTitle}</h1>
          <span>{data.bookAuthor}</span>
        </div>
        <footer>
          <p>{data.bookSummary}</p>
        </footer>
      </InfoContainer>
    </Container>
  )
}
