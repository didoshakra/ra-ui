///pages/api/psql-users/index.js
//Запити до tabl.users (get(select), post(insert))
//pgclient-if

// import bodyParser from "body-parser";
import { pool, pgclient } from "../../../config/db";
pgclient.connect();

// //https://www.taniarascia.com/node-express-postgresql-heroku/
export default async function(req, response) {
  console.log("api/psql-users/req.method=", req.method);

  //Працює
  if (req.method === "GET") {
    const sql = "SELECT * FROM users";
    pgclient.query(sql, (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
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

    pgclient.query(sql, values, (err, results) => {
      if (err) {
        console.log("****Помилка запиту до posgreSQL err.stack=", err.stack);
        console.log("****Кінець-Помилка запиту до posgreSQL ");
        let rows = [];
        response.status(200).json(rows);
      } else {
        console.log(results.rows[0]);
        response.status(200).json(results.rows);
      }
    });
  }

  //** */
  if (req.method === "DELETE") {
    // console.log("api/psql-users/DELETE/id=", req.body.id);
    const sql = "DELETE FROM users WHERE id=($1 ) RETURNING *";
    const rows = JSON.parse(req.body);
    // console.log("+++api/psql-us/ers/DELETE/rows=", rows);
    // var countDelete1 = 0;
    // var countNotDelete1 = 0;
    const resDelete = {
      countNotDelete: 0,
      countDelete: 0
    };
    try {
      rows.map((row, index) => {
        const values = [row.id];
        // console.log("+++api/psql-users/DELETE/map/values=", values);
        pgclient.query(sql, values, (err, results) => {
          if (err) {
            resDelete.countNotDelete++;
            console.log(
              "+++api/users/DEL/err/resDelete.couNotDelete=",
              resDelete.countNotDelete
            );
            response.status(200).json(results.countNotDelete);
            // results.status(200).json(resDelete);
          } else {
            resDelete.countDelete++;
            console.log(
              "+++api/DEL/!err/resDelete.countDelete=",
              resDelete.countDelete
            );
            // response.status(200).json(countDelete);
            response.status(200).resDelete;
          }
        });
      });
    } finally {
      // const resDelete = {
      //   countNotDelete: countNotDelete1,
      //   countDelete: countDelete1
      // };
      // console.log("+++api/users/DEL/couNotDelete1=", countNotDelete1);
      // console.log("+++api/users/DEL/couDelete1=", countDelete1);
      console.log("+++api/psql-users/DELETE/resDelete=", resDelete);
      response.status(200).json(resDelete);
    }
  }
}
