const Pool = require('pg').Pool;
require('dotenv').config({path: '../.env'})

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: "localhost",
    port: "5432",
    database: process.env.POSTGRES_DB
});

module.exports = pool;