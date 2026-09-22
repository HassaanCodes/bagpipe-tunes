const pool = require('./db')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.listen(3000, () => {
    console.log("server is listening on port 3000")
})


app.get('/tunes', async (req, res) => {
    try {
        let result = await pool.query('SELECT * FROM tunes;')
        res.send(result['rows'])
        
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Error")
    }
})