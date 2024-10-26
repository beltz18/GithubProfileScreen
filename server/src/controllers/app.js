import express from 'express'
import parser  from 'body-parser'
import cors    from 'cors'
import logger  from 'morgan'

import userManager  from '../routes/route.user.js'
import reposManager from '../routes/route.repos.js'

const server = express()

const middlewares = () => {
  server.use(parser.json(), parser.urlencoded({ extended: true }))
  server.use(cors())
  server.use(logger('dev'))
  server.use(userManager, reposManager)
}

const app = () => {
  middlewares()
  return server
}

export default app