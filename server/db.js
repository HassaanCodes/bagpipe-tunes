// const Pool = require('pg').Pool
// require('dotenv').config()

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false
//     }
// })

// pool.query('SELECT NOW();', (err, res) => {
//     if (err) {
//         console.error('did not connect')
//     } else {
//         console.log('connected to database "music": ', res.rows[0])
//     }
// })

// module.exports = pool

const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: true
    }
});

async function connectNeon() {
    let client = await pool.connect();
    let response = await client.query('SELECT * FROM tunes;');
    console.log(response['rows']);
}

connectNeon();

module.exports = pool;

