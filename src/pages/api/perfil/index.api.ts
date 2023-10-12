import { prisma } from '@/services/prisma'
import dayjs from 'dayjs'
import type { NextApiRequest, NextApiResponse } from 'next'

interface UserInfo {
  username: string
  avatarUrl: string
  created_at: string
  totalPages: string
  totalAssessments: string
  totalAuthorsRead: string
  categoryName: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const id = String(req.query.id)

  const rates = await prisma.rating.findMany({
    where: {
      user_id: id,
    },
    include: {
      book: true,
    },
  })

  const ratings = rates.map(({ id, book, rate, created_at }) => {
    return {
      id,
      rateDate: dayjs(new Date()).diff(created_at, 'day'),
      rate,
      bookCover: book?.cover_url,
      bookTitle: book?.name,
      bookAuthor: book?.author,
      bookSummary: book?.summary,
    }
  })

  const userInfoResponse = await prisma.$queryRaw`
    SELECT 
      U.name AS username,
      U.avatar_url AS avatarUrl,
      U.created_at,
      SUM(B.total_pages) AS totalPages,
      COUNT(Distinct R.ID) AS totalAssessments, 
      COUNT(Distinct B.author) AS totalAuthorsRead, 
      CB.categoryName

    FROM ratings R

    INNER JOIN books B ON R.book_id = B.id

    INNER JOIN users U ON R.user_id = U.id

    LEFT JOIN (SELECT  C2.name as categoryName, R2.user_id

			FROM ratings R2

			INNER JOIN CategoriesOnBooks CB2 ON R2.book_id = CB2.book_id

			INNER JOIN categories C2 ON C2.id = CB2.categoryId

			INNER JOIN users U2 ON R2.user_id = U2.id

      WHERE U2.id = ${id}

			GROUP BY C2.id, R2.user_id, R2.book_id 

			ORDER BY COUNT(R2.book_id) DESC 

			LIMIT 1) CB ON CB.user_id = R.user_id

    WHERE U.id = ${id}

    GROUP BY R.USER_ID,CB.categoryName
  `

  const serializedResult = JSON.stringify(userInfoResponse, (key, value) => {
    if (typeof value === 'bigint') {
      return value.toString()
    }
    return value
  })

  const parsedData: UserInfo = JSON.parse(serializedResult)[0]

  const userInfo = {
    ...parsedData,
    memberSince: dayjs(parsedData.created_at).get('year'),
  }

  // const userInfo = rates.reduce((acc, rate) => {

  //   return {
  //     username: user?.name,
  //     memberSince: dayjs(new Date()).diff(user?.created_at),
  //     pagesRead: acc.pagesRead + rate.book.total_pages
  //     authorsRead: acc.authorsRead
  //   }

  // }, {
  //   pagesRead: 0
  //   authorsRead: 0
  // })

  res.status(200).json({ userInfo, ratings })
}
