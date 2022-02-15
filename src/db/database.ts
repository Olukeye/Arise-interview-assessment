import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const {  PGHOST, PGUSER, PGPASSWORD, PGPORT} = process.env;


 export const pool = new Pool({
    user: PGUSER,
    host: PGHOST,
    database: "RiseVest",
    password: PGPASSWORD,
    port : PGPORT,
});
