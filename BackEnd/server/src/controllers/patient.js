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

  // khi nao co doctorId thi sua 'DOC1' thanh doctorId
  // khi nao co patientName thi sua 'J' thanh patientName
  const result = await database.query(sql, ['DOC1', 'J' + '%'])

  //result

  res.json(result.rows)
}
