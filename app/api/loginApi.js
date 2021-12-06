import client from "./axiosClient"

export const login = async (username, password) => {
  return await client.post('/login', {
      doctorId: username,
      password: password
  })
}





