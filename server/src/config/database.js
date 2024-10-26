import { PG_URI } from '../../global/var.js'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(PG_URI, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
})

export default sequelize