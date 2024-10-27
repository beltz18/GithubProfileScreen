'use server'

import { instance } from '@lib/utils'

const sample = {
  code: 501,
  status: false,
  data: {}
}

export const getUserData = async (username: string) => {
  try {
    const r = await instance.post('/get/user', { username })
    return r.data
  } catch (err) {
    console.log(err)
    return sample
  }
}

export const getReposData = async () => {
  try {
    const r = await instance.get('/get/repos')
    return r.data
  } catch (err) {
    console.log(err)
    sample['data'] = []
    return sample
  }
}