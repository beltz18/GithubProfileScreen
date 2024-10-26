import axios from 'axios'
import { SERVER, TIMEOUT } from '@lib/var'
import { UserT } from '@typ/User'

export const instance = axios.create({
  baseURL: SERVER,
  timeout: parseInt(TIMEOUT),
})

export const exampleData : UserT = {
  id: 0,
  name: 'loading...',
  username: 'loading...',
  description: 'loading...',
  followers: 0,
  following: 0,
  company: 'loading...',
  location: 'loading...',
  url: '/',
}