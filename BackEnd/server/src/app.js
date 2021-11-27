import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { verifyToken } from './controllers/auth.js'

import loginRouter from './routes/login.js'

import appointmentRouter from './routes/appointment.js'
import treatmentRouter from './routes/treatment.js'
import patientRouter from './routes/patient.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/login', loginRouter)

const APIRouter = express.Router()
APIRouter.use(verifyToken)
APIRouter.use('/appointment', appointmentRouter)
APIRouter.use('/treatment', treatmentRouter)
APIRouter.use('/patient', patientRouter)

app.use('/api', APIRouter)

export default app
