import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const {  PGHOST, PGUSER, PGPASSWORD,  PGDATABASE} = process.env;


 export const pool = new Pool({
    user: PGUSER,
    host: PGHOST,
    database:PGDATABASE,
    password: PGPASSWORD,
    port : "5432",
});
