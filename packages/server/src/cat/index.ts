import functions from 'firebase-functions'

export const getCat = functions.https.onRequest(async (_req, res) => {
  res.send('I am a cat.')
})
