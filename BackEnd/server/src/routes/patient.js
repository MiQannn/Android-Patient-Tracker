import express from 'express'
import {
  getPatientsById,
  getPatientsByName,
  createPatient,
} from '../controllers/patient.js'

const router = express.Router()

// router.get('/', getMyPatients)

router.get('/', async (req, res) => {
  const { patientId, patientName } = req.query

  if (patientId) {
    await getPatientsById(req, res)
  } else {
    await getPatientsByName(req, res)
  }
})

router.post('/', createPatient)

export default router
