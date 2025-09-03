import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "mysql-aecb95f-purnima-59ed.b.aivencloud.com",    // e.g., localhost or IP
  user: "avnadmin",
  password: "AVNS_aOxiHcO_6JmfX8tD0O1", // ✅ must not be empty
  database: "defaultdb",
  port: 27038, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
