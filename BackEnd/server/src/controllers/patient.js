import database from '../services/database.js'

// Express middleware
export const getMyPatients = async (req, res) => {
  const { doctorId, patientName } = req.body

  // Query database
  const sql = `
    SELECT DISTINCT "patient".*
    FROM "patient"
    INNER JOIN "appointment" ON appointment.patient_id = patient.patient_id
    WHERE doctor_id= $1
    AND patient.patient_name LIKE $2;`

  const result = await database.query(sql, [doctorId, `%${patientName}%`])

  //result

  res.json(result.rows)
}
