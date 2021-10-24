import database from '../services/database.js'

// Express middleware
export const getUpcomingAppointments = async (req, res) => {
  const { doctorId } = req.body

  // Query database
  const sql = `
    SELECT *
    FROM "appointment"
    WHERE doctor_id= $1
    AND date(appointment_day) > current_timestamp;`

  const result = await database.query(sql, [doctorId])

  //result

  res.json(result.rows)
}
