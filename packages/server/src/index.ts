import admin from 'firebase-admin'

admin.initializeApp()

import * as cat from '@saxo/server/cat'
import * as dog from '@saxo/server/dog'

export const v1 = {
  ...cat,
  ...dog,
}
