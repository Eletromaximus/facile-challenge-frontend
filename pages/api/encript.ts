// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

export default async function Encript(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method = 'POST') {
    const { name } = req.body
    const salt = crypto.randomBytes(16).toString('hex')
    var hash = crypto.createHmac('sha512', salt)
    hash.update(name)
    const result = hash.digest('hex')

    
    return res.status(200).json({ result })
  }
  return res.status(405).json({message: 'Method Not Allowed' }) 
}
