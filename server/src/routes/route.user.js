import { Router } from 'express'
import { getUser, createUSer } from '../controllers/controller.user.js'

const userManager = Router()

userManager.post('/get/user', getUser)
userManager.get('/create/user', createUSer)

export default userManager