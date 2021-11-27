import database from '../services/database.js'

// Express middleware
export const getTreatment = async (req, res) => {
  const doctorId = req.locals.user.id
  const patientId = req.query.patientId
  // Query database
  const sql = `
    SELECT *
    FROM "treatment"`
  // WHERE doctor_id= $1
  // AND patient_id = $2;`

  const result = await database.query(sql)

  //result

  res.json(result.rows)
}

export const createTreatment = async (req, res) => {
  const doctorId = req.locals.user.id
  const {
    patientId,
    treatment_day,
    patient_status,
    patient_diagnosis,
    medicine,
    cost,
  } = req.body

  const sql = `
    INSERT INTO "treatment" ("doctor_id","patient_id", "treatment_day", "patient_status","patient_diagnosis","medicine","cost")
    VALUES ($1, $2, $3, $4, $5, $6, $7);`

  const result = await database.query(sql, [
    doctorId,
    patientId,
    treatment_day,
    patient_status,
    patient_diagnosis,
    medicine,
    cost,
  ])
  res.send('Completed')
}