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

export const colors : any = {
  javascript: 'bg-[#F1E05A]',
  typescript: 'bg-[#3178C6]',
  python: 'bg-[#3572A5]',
  html: 'bg-[#E34C26]',
  ejs: 'bg-[#A91E50]',
  css: 'bg-[#563D7C]',
  md: 'bg-[#C0C0C0]',
}