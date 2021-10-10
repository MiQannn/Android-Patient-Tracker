import express from 'express'
import { getAllDoctors } from '../controllers/doctors.js'

const router = express.Router()

router.get('/', getAllDoctors)

export default router
