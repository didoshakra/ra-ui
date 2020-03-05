///pages/api/psql-users/index.js
//Запити до tabl.users (get(select), post(insert))
//pool-if
//GET/POST/DELETE/

import { pool } from "../../../config/db";

// //https://www.taniarascia.com/node-express-postgresql-heroku/
export default async function(req, response) {
  // console.log("api/psql-users/req.method=", req.method);
  const pgclient = await pool.connect();
  //Працює
  if (req.method === "GET") {
    try {
      const sql = "SELECT * FROM users";
      pgclient.query(sql, (err, result) => {
        if (err) {
          // console.log("+++ api/psql-users/GET/if(err)", err);
          throw err; // генерує виняток
          // throw 'myException'; // генерує виняток
        }
        // console.log("+++ api/psql-users/GET/!if(err)");
        response.status(200).json(result.rows);
      });
    } catch (err) {
      // logMyErrors(eer); //Ф-ція обробки помилок()
      // console.log(err.stack);
    } finally {
      // console.log("+++ api/psql-users/GET/finally");
      client.release();
    }
  }

  if (req.method === "POST") {
    // const value = ["123", "rrrr22", "rrrr22", "1r1@233.ua", "342748391"];
    // console.log("****index.js=== POST");
    const sql =
      "INSERT INTO users ( firstname,lastname,age,email,phone) VALUES($1,$2,$3,$4,$5) RETURNING *";
    const users = JSON.parse(req.body); //Для feth- не треба переиворення json ->obj
    // const users = req.body; //!!!!!!Для axios- не треба перетворення JSON.parse(req.body)
    const values = [
      users.firstname,
      users.lastname,
      users.age,
      users.email,
      users.phone
    ];
    // console.log("*****values=", values);
    // console.log("*****req.body=", req.body);

    pgclient.query(sql, values, (err, result) => {
      if (err) {
        // console.log("****Помилка запиту до posgreSQL err.stack=", err.stack);
        // console.log("****Кінець-Помилка запиту до posgreSQL ");
        let error = {
          stack: err.stack,
          message: "Помилка запиту до БД posgreSQL"
        };
        response.status(400).json(error);
      } else {
        // console.log("+++api/users/POST/!err/result=", result.rows[0]);
        response.status(200).json(result.rows);
      }
    });
  }

  if (req.method === "DELETE") {
    const rowsSelected = JSON.parse(req.body); //рядки для вилучення
    const rowsid = rowsSelected.map(row => row.id); // id список рядків для вилучення // const rowsid = [371, 395];
    // console.log(`+++api/psql-users/DELETE/rows= ${rowsid}`);
    console.log("+++api/psql-users/DELETE/rows= ", rowsid);
    const sql = `DELETE FROM users WHERE id IN (${rowsid})`;
    pgclient.query(sql, (err, result) => {
      // console.log("===api/psql-users/DEL/result.rowCount", result.rowCount); //Якщо в запиті нема RETURNING *
      if (err) {
        // console.log("+++api/users/DEL/Помилка запиту до posgreSQL",err.stack);
        let error = {
          stack: err.stack,
          message: "Помилка запиту до БД posgreSQL"
        };
        response.status(400).json(error);
      } else {
        // console.log("+++api/users/DEL/!err/result=", result);
        response.status(200).json(result.rowCount); //rowCount-к-кість успішних рядків
      }
    });
  }

  if (req.method === "PUT") {
    // console.log("+++api/users/ PUT/quryBody=");
    const nR = JSON.parse(req.body); //nR-нові рядки і список id для коригування
    // console.log("+++api/users/ PUT/quryBody=", nR);

    const sql = `UPDATE users SET firstname = '${nR.firstname}', lastname = '${nR.lastname}', age = ${nR.age}, email = '${nR.email}', phone = '${nR.phone}' WHERE id IN (${nR.rowsid})`;
    // "UPDATE users SET firstname = ($1), lastname = ($2), age = ($3), email = ($4), phone = ($5) WHERE id = ($6)";//З параметрами value працює якщо nR.rowsid[0](1-й елемент) З nR.rowsid-НЕ ПРАЦЮЄ!!!- чомусь сприймається як масив строкових значень)
    console.log("*+++api/users/ PUT/sql=", sql);

    // pgclient.query(sql, values, (err, result) => {
    pgclient.query(sql, (err, result) => {
      if (err) {
        // console.log("+++api/users/PUT/Помилка запиту до posgreSQL",err.stack);
        let error = {
          stack: err.stack,
          message: "Помилка запиту до БД posgreSQL"
        };
        response.status(400).json(error);
      } else {
        // console.log("+++api/users/DEL/!err/result=", result);
        response.status(200).json(result.rowCount); //rowCount-к-кість успішних рядків
      }
    });
  }
}
