import client from "./axiosClient"

export const getPatientByID = async (id) => {
  return await client.get('/api/patient', { params: { id } })
}

export const getPatientByName = async (name) => {
  return await client.get('/api/patient', { params: { name } })
}