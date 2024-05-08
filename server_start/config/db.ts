import { Pool } from 'pg';
import dotenv from 'dotenv';
const { POSTGRE_USER, POSTGRE_PASSWORD } = process.env;

dotenv.config();

export const db = new Pool({
    user: POSTGRE_USER,
    password :POSTGRE_PASSWORD,
    host : 'localhost',
    port : 5432,
    database : 'tortasdepollostack'
});

