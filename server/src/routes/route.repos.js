import { Router } from 'express'
import { getAllRepos } from '../controllers/controller.repos.js'

const reposManager = Router()

reposManager.get('/get/repos', getAllRepos)

export default reposManager