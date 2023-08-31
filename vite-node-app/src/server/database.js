import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    port: process.env.PGPORT,
    password: process.env.PGPASS,
})

export default pool;