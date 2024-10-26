import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Repos = sequelize.define('Repos', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  visibility: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  update: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default Repos