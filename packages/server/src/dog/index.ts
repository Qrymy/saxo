import functions from 'firebase-functions'

export const getDog = functions.https.onRequest(async (_req, res) => {
  res.send('I am a dog.')
})
