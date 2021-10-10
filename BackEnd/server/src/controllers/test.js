import database from '../services/database.js'

export const getTest = async (req, res) => {
  res.send({
    name: 'This is a route for testing',
    databaseTime: (await database.query('SELECT NOW();')).rows,
  })
}
