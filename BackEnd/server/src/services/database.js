import config from '../config.js'
import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  connectionString: config.databaseUrl,
})

setTimeout(async () => {
  await pool.connect()
  console.log('Database connected')
}, 3000)

export default pool
