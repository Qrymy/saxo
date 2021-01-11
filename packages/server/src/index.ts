import admin from 'firebase-admin'

admin.initializeApp()

import * as cat from '@/cat'
import * as dog from '@/dog'

export const v1 = {
  ...cat,
  ...dog,
}
