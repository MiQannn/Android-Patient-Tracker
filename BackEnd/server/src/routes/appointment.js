import express from 'express'
import {
  getUpcomingAppointments,
  createAppointment,
} from '../controllers/appointment.js'

const router = express.Router()

router.get('/upcoming', getUpcomingAppointments)

router.post('/', createAppointment)

export default router
