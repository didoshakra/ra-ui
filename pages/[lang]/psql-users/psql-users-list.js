// psql-users-list.js  //https://nextjs.org/blog/next-9#api-routes
//+ //Приклад з ReactMui-UsersList.js

// import React, { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// import Divider from "@material-ui/core/Divider";

import AppFrame from "../../../modules/main/components/AppFrame";

const styles = theme => ({
  rootDiv: {
    padding: "10px",
    margin: "0px 10px",
    border: "2px solid blue",
    borderRadius: "5px",
    // boxSizing: 'border-box',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.backgroundColor
    // backgroundColor: lighten(theme.palette.primary, 0.9),
  }
});

const Users = props => {
  const { classes } = props;
  // console.log("Pages/psql-users/User.js/props.usersList=", prors.usersList);

  // UsersList
  const [usersList, setUsersList] = React.useState(props.usersList);
  //Зміна Checkbox
  const onCheck = (checked, idx) => {
    // console.log("Users.js/onCheck/checked= ", checked + "/idx=", idx);
    let itemList = usersList; //сторюємо початковий (state)масив до змін
    itemList[idx].checked = !itemList[idx].checked; //вносимо зміни в конкретний вибраний запис по індексу масиву
    setUsersList(itemList); //обновлюємр (state)масив
    // console.log(
    //   "Users.js/onCheck/usersList=",
    //   usersList + "/itemList=",
    //   itemList
    // );
  };

  return (
    <AppFrame>
      <div>
        <h2>Список користувачів/psql-users</h2>
        <List component="nav" className={classes.rootDiv}>
          {usersList.map((item, index) => {
            //показуємо рядки в циклі
            return (
              <div key={index}>
                <ListItem>
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    value="checked"
                    // onChange={(event, checked) => console.log(checked)}
                    checked={item.checked}
                    onChange={(event, inputChecked) =>
                      onCheck(inputChecked, index)
                    }
                  />
                  <ListItemText primary={item.name} />
                  <ListItemText primary={item.age} />
                  {/* <ListItemText primary={item.lastName} />
                  <ListItemText secondary={item.birthday} />
                  <ListItemText primary={item.checked} /> */}
                </ListItem>
                {/* <Divider /> */}
              </div>
            );
          })}
        </List>
      </div>
    </AppFrame>
  );
};

//Це статична асинхронна функція для отримання даних як реквізити для сторінки.
Users.getInitialProps = async function() {
  // const usersList = [
  //   {
  //     name: "Ім'я1",
  //     lastName: "Прізвище1 з списку",
  //     birthday: "01/02/2016",
  //     age: "15",
  //     checked: true
  //   },
  //   {
  //     name: "Ім'я2",
  //     lastName: "Прізвище2 з списку",
  //     birthday: "01/02/2016",
  //     age: "2",
  //     checked: false
  //   }
  // ];
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts"); //post-list-awesom
  // const res = await fetch("http://localhost:3000/api/psql-users1/insert");//Додати запис-працює
  const res = await fetch("http://localhost:3000/api/psql-users1/select-all"); //вибрати все-працює
  if (res.ok) {
    // якщо HTTP-статус в диапазоне 200-299
    // const data = await res.text(); //повертає тіло відповіді текст\api/test
    let data = await res.json(); //повертає тіло відповіді json
    // console.log(
    //   `Pages/psql-users/index.js/getInitialProps/Users. Count: ${data.length}`
    // );
    // console.log(
    //   "Pages/psql-users/index.js/getInitialProps/response/data=",
    //   data
    // );
    return {
      usersList: data
      // shows: data.map(entry => entry.show)//PostBatmanList
    };
  } else {
    // console.log(`Pages/psql-users/index.js/Помилка HTTP: ${res.status}`);
    return { usersList };
  }
};

export default withStyles(styles)(Users);
