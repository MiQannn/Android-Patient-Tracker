export const getAllDoctors = async (req, res) => {
  res.send(`You are ${JSON.stringify(req.locals.user)}`)
}
