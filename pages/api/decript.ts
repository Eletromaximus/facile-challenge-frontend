import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'
import { database, PrismaClient } from '.prisma/client'

export default async function Decript(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method = 'POST') {
    const { id } = req.body
    const prisma = new PrismaClient()

    const data: database | null = await prisma.database.findUnique( {
      where: {
        id
      }
    })
    
    if (data?.buffer && data?.hash !== null) {
      const decipher = crypto.createDecipheriv(
        'aes-128-ctr',
        String(process.env.SECRET),

        Buffer.from(data.buffer, 'hex')
      )

      const decrpyted = Buffer.concat(
        [decipher.update(
          Buffer.from(data.hash,'hex')),
          decipher.final()
        ])

      res.status(200).send(
        decrpyted.toString()
      )
    }
    res.status(500)
  }
}