import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from ".prisma/client"
import crypto from 'crypto'

export default async function Encript(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method = 'POST') {
    const prisma = new PrismaClient()
    const { text } = req.body

    if (typeof text === 'string') {
      const buffer = Buffer.from(crypto.randomBytes(16))
      const cipher = crypto.createCipheriv(
        'aes-128-ctr',
        String(process.env.SECRET), 
        buffer
      )
      const encrypted = Buffer.concat([
        cipher.update(text),
        cipher.final()
      ])
  
  
      const { id } = await prisma.database.create( {
        data: {
          hash: encrypted.toString('hex'),
          buffer: buffer.toString('hex')
        }
      })
      return res.status(200).send({id: id})
    } 
    //@ts-ignore
    res.json({
      code: "E_VALIDATION_FAILURE",
      message: "O campo \ text\ é obrigatório"
    })
  }
  return res.status(405).json({message: 'Method Not Allowed' }) 
}
