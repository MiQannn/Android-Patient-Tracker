import express from 'express'
import { getAllPatients } from '../controllers/patients.js'

const router = express.Router()

router.get('/', getAllPatients)

export default router
