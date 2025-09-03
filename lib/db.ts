import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.DB_HOST,     // e.g. localhost or remote host
  user: process.env.DB_USER,     // your mysql username
  password: process.env.DB_PASS, // your mysql password
  database: process.env.DB_NAME, // your database name
});
