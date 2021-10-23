import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { verifyToken } from './controllers/auth.js'

import testRouter from './routes/test.js'
import loginRouter from './routes/login.js'

import doctorRouter from './routes/doctor.js'
import appointmentRouter from './routes/appointment.js'
import patientRouter from './routes/patient.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/test', testRouter)
app.use('/login', loginRouter)

const APIRouter = express.Router()
// APIRouter.use(verifyToken)
APIRouter.use('/doctor', doctorRouter)
APIRouter.use('/appointment', appointmentRouter)
APIRouter.use('/patient', patientRouter)

app.use('/api', APIRouter)

export default app
