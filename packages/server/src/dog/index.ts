import functions from 'firebase-functions'
import { getColor } from '@shared/utils/getColor'

export const getDog = functions.https.onRequest(async (_req, res) => {
  const color = getColor()

  res.send(`I'm a ${color} dog.`)
})
