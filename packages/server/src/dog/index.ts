import functions from 'firebase-functions'
import { getColor } from '@saxo/shared/utils/getColor'
import { REGIONS } from '@saxo/shared/const/Regions'

export const getDog = functions
  .region(REGIONS.FUNCTIONS)
  .https.onRequest(async (_req, res) => {
    const color = getColor()

    res.send(`I'm a ${color} dog.`)
  })
