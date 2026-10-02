
import { Pool } from 'pg';
import 'dotenv/config'

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: true
    }
});

async function connectNeon() {
    let response = await pool.query('SELECT * FROM tunes;');
    console.log(response['rows']);
}

connectNeon();

export default pool;

