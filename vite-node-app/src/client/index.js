import pg from 'pg';
const Client = pg.Client;
await import ('dotenv').config({path: '/.env'});

const client = new Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  database: process.env.PGDB,
  password: process.env.PGPASS
})

await client.connect();

try {
    const result = await client.query('SELECT NOW()');
    console.log(result);
} catch (error) {
    console.log(error);
}

await client.end();