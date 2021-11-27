import database from '../services/database.js'

// Express middleware
export const getUpcomingAppointments = async (req, res) => {
  const doctorId = req.locals.user.id

  // Query database
  const sql = `
    SELECT *
    FROM "appointment"
    WHERE doctor_id= $1
    AND appointment_day >current_timestamp 
    LIMIT 10;`

  const result = await database.query(sql, [doctorId])

  //result

  res.json(result.rows)
}

export const createAppointment = async (req, res) => {
  const doctorId = req.locals.user.id
  const { patientId, appointmentDay, appointmentDescription } = req.body

  // Query database
  const sql = `
    INSERT INTO "appointment" ("doctor_id","patient_id", "appointment_day", "appointment_descripton")
    VALUES ($1, $2, $3, $4);`

  const result = await database.query(sql, [
    doctorId,
    patientId,
    appointmentDay,
    appointmentDescription,
  ])
  res.send('Completed')
}
