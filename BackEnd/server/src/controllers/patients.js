import config from '../config.js'

export const getAllPatients = async (req, res) => {
  res.send({ name: 'HelpMeDoctor', database: config.databaseURL })
}
