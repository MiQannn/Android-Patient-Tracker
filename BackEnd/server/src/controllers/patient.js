import database from '../services/database.js'

export const getPatientsByName = async (req, res) => {
  const patientName = req.query.patientName
  console.log(patientName)

  // Query database
  const sql = `
    SELECT *
    FROM "patient"
    WHERE patient_name LIKE $1;`

  const result = await database.query(sql, [`%${patientName}%`])

  //result
  res.json(result.rows)
}

export const getPatientsById = async (req, res) => {
  const patientId = req.query.patientId

  // Query database
  const sql = `
    SELECT *
    FROM "patient"
    WHERE patient_id = $1;`

  const result = await database.query(sql, [patientId])

  //result

  res.json(result.rows)
}

export const createPatient = async (req, res) => {
  const { patientName, patientAge, patientSSN, medicalHistory } = req.body

  // Query database
  const sql = `
    INSERT INTO "patient" ("patient_name", "patient_age", "patient_ssn","medical_history")
    VALUES ($1, $2, $3, $4)`

  const result = await database.query(sql, [
    patientName,
    patientAge,
    patientSSN,
    medicalHistory,
  ])
  res.send('Completed')
}
