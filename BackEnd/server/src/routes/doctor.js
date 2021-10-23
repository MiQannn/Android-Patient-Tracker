import express from 'express'
import { getAllDoctors } from '../controllers/doctor.js'

const router = express.Router()

router.get('/', getAllDoctors)

export default router
