import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

export default async function Decript(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method = 'POST') {
    const { encript } = req.body
  }
}