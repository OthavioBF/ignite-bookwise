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

  const categories = await prisma.category.findMany()

  const books = await prisma.book.findMany({
    include: {
      ratings: true,
      categories: true,
    },
  })

  const catalog = books.map((book) => {
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
      categories: book.categories,
      biggerImage: true,
    }
  })

  res.status(200).json({ catalog, categories })
}
