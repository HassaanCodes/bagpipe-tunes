const pool = require('./db')
const genURL = require('./url')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.listen(3000, () => {
    console.log("server is listening on port 3000")
})


app.get('/tunes', async (req, res) => {
    try {
        let result = await pool.query("SELECT tune, sheet FROM tunes;")
        let urls = await result.rows.map(genURL)
        res.json(urls)
    } catch (error) {
        console.error(error.message)
    }
})