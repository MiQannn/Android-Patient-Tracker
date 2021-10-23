import express from 'express'
import { getUpcomingAppointments } from '../controllers/appointment.js'

const router = express.Router()

router.get('/upcoming', getUpcomingAppointments)

export default router
