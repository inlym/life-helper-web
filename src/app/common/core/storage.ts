import localforage from 'localforage'
import { environment } from '../../../environments/environment'

export const storage = localforage.createInstance({
  name: 'lifehelper',
  storeName: environment.name,
})
