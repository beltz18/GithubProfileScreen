import app     from './controllers/app.js'
import * as _v from '../global/var.js'
import { sequelize } from './models/index.js'

const __init__ = () => {
  app().listen(_v.PORT, async () => {
    console.log('Server live')

    try {
      await sequelize.sync()
      console.log('database synced')
    } catch (err) {
      console.log('err: ', err.message)
    }
  })
}

__init__()