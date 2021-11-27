import express from 'express'
import { getTreatment, createTreatment } from '../controllers/treatment.js'

const router = express.Router()

router.get('/', getTreatment)

router.post('/', createTreatment)

export default router
