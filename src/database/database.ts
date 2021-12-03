//@ts-ignore
const {Pool} = require('pg')

const pool = new Pool({
  host: 'localhost' || process.env.PSQL_HOST,
  database: 'database' || process.env.PSQL_DATABASE,
  user: 'admin2' || process.env.PSQL_USER,
  port: 5432 || process.env.PSQL_PORT,
  password: '48273#Xz' || process.env.PASSWORD,
})

async function migrate() {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS encripts (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    )`)
    throw new Error('Banco já existente')
  } catch(e) {
    console.log(e)
  }
}

migrate().then(() => process.exit())