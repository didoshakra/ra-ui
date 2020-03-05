//config/psql-db.js
//Підключення до PosgreSQL
//https://medium.com/@dannibla/connecting-nodejs-postgresql-f8967b9f5932
const { Pool, Client } = require("pg");

const connectionString = "postgres://postgres:postgres@localhost/pgNode_db"; // Для  PostgresDB
//----------------------/"postgres://login:password@localhost/nameBD"

export const pgclient = new Client({
  connectionString: connectionString
});

export const pool = new Pool({
  connectionString: connectionString
});

// export const pool = new Pool({
//   user: "postgres", //login
//   host: "localhost",
//   database: "pgNode_db",
//   password: "postgres",
//   // port: 3211
// });
