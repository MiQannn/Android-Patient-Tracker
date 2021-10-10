import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { verifyToken } from './controllers/auth.js'

import testRouter from './routes/test.js'
import loginRouter from './routes/login.js'

import doctorsRouter from './routes/doctors.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/test', testRouter)
app.use('/login', loginRouter)

const APIRouter = express.Router()
APIRouter.use(verifyToken)
APIRouter.use('/doctors', doctorsRouter)

app.use('/api', APIRouter)

export default app
