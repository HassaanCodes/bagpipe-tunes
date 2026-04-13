const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'hassaan',
    host: '172.31.211.55',
    port: 5432,
    database: 'music'
})

pool.query('SELECT NOW();', (err, res) => {
    if (err) {
        console.error('did not connect')
    } else {
        console.log('connected to database "music": ', res.rows[0])
    }
})

module.exports = pool