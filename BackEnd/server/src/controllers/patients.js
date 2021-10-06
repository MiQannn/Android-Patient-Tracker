import database from '../services/database.js'

export const getAllPatients = async (req, res) => {
  res.send({
    name: 'HelpMeDoctor',
    databaseTime: (await database.query('SELECT NOW();')).rows,
  })
}
