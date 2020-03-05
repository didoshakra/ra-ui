///pages/api/psql-users/index.js
//Запити до tabl.users (get(select), post(insert))
//pool-if

import { pool } from "../../../config/db";

// //https://www.taniarascia.com/node-express-postgresql-heroku/
export default async function(req, response) {
  console.log("api/psql-users/req.method=", req.method);
  const pgclient = await pool.connect();
  //Працює
  if (req.method === "GET") {
    try {
      const sql = "SELECT * FROM users";
      pgclient.query(sql, (err, results) => {
        if (err) {
          console.log("+++ api/psql-users/GET/if(err)", err);
          throw err; // генерує виняток
          // throw 'myException'; // генерує виняток
        }
        console.log("+++ api/psql-users/GET/!if(err)");
        response.status(200).json(results.rows);
      });
    } catch (err) {
      // logMyErrors(eer); //Ф-ція обробки помилок()
      console.log(err.stack);
    } finally {
      console.log("+++ api/psql-users/GET/finally");
      client.release();
    }
  }

  if (req.method === "POST") {
    // const value = ["123", "rrrr22", "rrrr22", "1r1@233.ua", "342748391"];
    console.log("****index.js=== POST");
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
    console.log("*****values=", values);
    // console.log("*****req.body=", req.body);

    pgclient.query(sql, values, (err, result) => {
      if (err) {
        console.log("****Помилка запиту до posgreSQL err.stack=", err.stack);
        console.log("****Кінець-Помилка запиту до posgreSQL ");
        let error = {
          stack: err.stack,
          message: "Помилка запиту до БД posgreSQL"
        };
        response.status(400).json(error);
      } else {
        console.log(result.rows[0]);
        response.status(200).json(result.rows);
      }
    });
  }

  //** */
  if (req.method === "DELETE") {
    // console.log("api/psql-users/DELETE/id=", req.body.id);
    const sql = "DELETE FROM users WHERE id=($1 ) RETURNING *";
    const rows = JSON.parse(req.body);
    // console.log("+++api/psql-us/ers/DELETE/rows=", rows);
    try {
      var resDelete = {
        countNotDelete: 0,
        countDelete: 0
      };
      rows.map((row, index) => {
        const values = [row.id];
        // console.log("+++api/psql-users/DELETE/map/values=", values);
        pgclient.query(sql, values, (err, results) => {
          console.log("====api/psql-users/DEL/map/results.rows=", results.rows);
          if (err) {
            resDelete.countNotDelete++;
            console.log("+++api/users/DEL/err/resDelete=", resDelete);
          } else {
            resDelete.countDelete++;
            console.log("+++api/DEL/!err/resDelete=", resDelete);
          }
        });
      });
      console.log("***api/DEL/resDelete=", resDelete); //Швидше ніж в rows.map
      response.status(200).json(resDelete);
    } finally {
      console.log("+++api/psql-users/DELETE/finally/resDelete="); //Піся Try, але Швидше ніж в rows.map
    }
  }
}
