import express from 'express'
import morgan from 'morgan'

import PatientsRouter from './routes/patients.js'

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use('/patients', PatientsRouter)

export default app
