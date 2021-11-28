import client from "./axiosClient"

export const getUpcomingAppointment = async () => {
  return await client.get('/api/appointment/upcoming')
}

export const createAppointment = async ( patientId, appointmentDay, appointmentDescription) => {
  return await client.post('/api/appointment', {
    patientId, appointmentDay, appointmentDescription
  })
}