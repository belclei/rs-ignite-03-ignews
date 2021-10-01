import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const session = await getSession({ req })
    res.status(200).json({ user: session.user })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}
