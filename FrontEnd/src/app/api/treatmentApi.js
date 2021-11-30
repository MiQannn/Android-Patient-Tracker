import client from "./axiosClient"

export const getTreatment = async (patientId) => {
  return await client.get('/api/treatment', { params: { patientId } })
}

export const createTreatment = async (
    patientId,
    treatmentDay,
    patientStatus,
    patientDiagnosis,
    medicine,
    cost) => {
  return await client.post('/api/treatment', {
    patientId,
    treatmentDay,
    patientStatus,
    patientDiagnosis,
    medicine,
    cost
  })
}