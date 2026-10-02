
import pool from './db.js'
import cors from 'cors'
import express from 'express'
import getTuneUrl from './s3.js'

const app = express()
const port = 3000

app.use(cors())

app.listen(port, () => {
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


app.get('/music/:tune', async (req, res) => {
    try {
        let tune = req.params.tune
        let url = await getTuneUrl(tune)
        res.send(url)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Error")
    }
})