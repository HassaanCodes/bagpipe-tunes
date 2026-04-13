const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.query('SELECT NOW();', (err, res) => {
    if (err) {
        console.error('did not connect')
    } else {
        console.log('connected to database "music": ', res.rows[0])
    }
})

module.exports = pool