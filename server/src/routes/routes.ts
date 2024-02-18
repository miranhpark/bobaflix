import { Router } from 'express'
import controller from '../controllers/controllers'

const router = Router()

router.get('/yelp-query', controller.getData)

export default router
