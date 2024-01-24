import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const db = mysql.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

db.connect((err) => {
  if (err) {
    throw err
  }
  console.log('Connected to database ' + db.threadId)
})

export default db
