/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/services/prisma'
import dayjs from 'dayjs'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const mostRecentRates = await prisma.rating.findMany({
    include: {
      user: true,
      book: true,
    },
  })

  const recentRates = mostRecentRates.map(
    ({ id, book, user, rate, created_at }) => {
      return {
        id,
        username: user?.name,
        userAvatar: user?.avatar_url,
        rateDate: dayjs(new Date()).diff(created_at, 'day'),
        rate,
        bookCover: book?.cover_url,
        bookTitle: book?.name,
        bookAuthor: book?.author,
        bookSummary: book?.summary,
      }
    },
  )

  const mostPopular = await prisma.book.findMany({
    where: {
      ratings: {
        some: {},
        every: {
          rate: {
            gte: 4,
          },
        },
      },
    },
    include: {
      ratings: true,
    },
  })

  const popularBooks = mostPopular.map((book) => {
    const rate = Math.max.apply(
      null,
      book.ratings.map((r) => r.rate),
    )

    return {
      id: book.id,
      bookTitle: book.name,
      bookAuthor: book.author,
      bookCover: book.cover_url,
      rate,
    }
  })

  res.status(200).json({ recentRates, popularBooks })
}
