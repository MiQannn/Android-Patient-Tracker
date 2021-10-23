import express from 'express'
import { getMyPatients } from '../controllers/patient.js'

const router = express.Router()

router.get('/', getMyPatients)

export default router
