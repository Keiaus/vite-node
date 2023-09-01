require('dotenv/config');
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    port: process.env.PGPORT,
    password: process.env.PGPASS,
})

module.exports = pool;