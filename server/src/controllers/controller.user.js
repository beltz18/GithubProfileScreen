import { User } from '../models/index.js'
import { defaultResponse } from '../config/util.js'

/**
 * Retrieves user data based on the provided username and sends
 * a response with the retrieved data or an error message.
 */
const getUser = async (req, res) => {
  const { username } = req.body
  const response = { ...defaultResponse }

  try {
    const user = await User.findOne({ where: { username } })

    response['status']  = true
    response['data']    = user.toJSON()
    response['message'] = 'User data retrieved'
  } catch (err) {
    response['code'] = 500
    response['message'] = err.message
  }
  res.status(response['code']).json(response)
}

/**
 * An asynchronous function that creates a new user based on the data
 * provided in the request body and returns a response with the created
 * user data or an error message.
 */
const createUSer = async (req, res) => {
  const response = { ...defaultResponse }

  /** STRUCTURE:
    {
      name: string,
      username: string,
      description: string,
      followers: number,
      following: number,
      company: string,
      location: string,
      url: string,
    }
  **/

  const userData = req.body

  try {
    const user = await User.create(userData)

    response['code']    = 201
    response['status']  = true
    response['data']    = user
    response['message'] = 'User created'
  } catch (err) {
    response['code'] = 500
    response['message'] = err.message
  }
  res.status(response['code']).json(response)
}

export { getUser, createUSer }