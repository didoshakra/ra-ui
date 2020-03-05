///pages/api/psql-users/select-all.js
//Select- вибір даних з tabl.users

// const { pgclient } = require("../../../config/db");//устарів але працює
import { pgclient } from "../../../config/db";
pgclient.connect();

// //https://www.taniarascia.com/node-express-postgresql-heroku/
//SELECT //Всі варіанти працюютьПрацює
// module.exports = async (request, response) => {
// const getUsers = async (request, response) => {//Працює  з export default getUsers; вкінцімодуля
// const getUsers = (request, response) => {  //Працює  з export default getUsers; вкінцімодуля
// export default function handle(request, response) {  //Працює

export default async function(request, response) {
  //Працює
  pgclient.query("SELECT * FROM users1", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}
