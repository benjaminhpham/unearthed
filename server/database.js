import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const config = {
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
};

export const pool = new pg.Pool(config);
