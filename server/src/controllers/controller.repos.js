import { Repos } from '../models/index.js'
import { defaultResponse } from '../config/util.js'

/**
 * Retrieves all the repositories data
 */
const getAllRepos = async (req, res) => {
  const response = { ...defaultResponse }

  try {
    const repos = await Repos.findAll()

    response['status']  = true
    response['data']    = repos
    response['message'] = 'Repos data retrieved'
  } catch (err) {
    response['code'] = 500
    response['message'] = err.message
  }
  res.status(response['code']).json(response)
}

export { getAllRepos }