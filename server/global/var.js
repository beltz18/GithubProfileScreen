import dotenv from 'dotenv'

dotenv.config()

const PORT   = process.env.PORT
const PG_URI = process.env.PG_URI

export { PORT, PG_URI, }