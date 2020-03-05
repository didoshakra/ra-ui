// psql-users/psql-users-table-fetch.js//https://nextjs.org/blog/next-9#api-routes
//+ //Приклад з ReactMui-UsersList.js
//+////mui-table-obj.js //MUI-Simple Table(без вибору і сортування) /https://material-ui.com/components/tables/
//fetch-для запитів до сервера
// psql-users-table-fetch.js(table компоненти з @material-ui) //https://nextjs.org/blog/next-9#api-routes
// Таблиця/Сортування і выбір рядків (можна добавити додавання,коригування і вилучення)

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
// import InsertIcon from "@material-ui/icons/InsertChart";
import Refresh from "@material-ui/icons/Refresh";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FilterListIcon from "@material-ui/icons/FilterList";
import Popover from "@material-ui/core/Popover";
import fetch from "isomorphic-fetch";

import UsersForm from "./users_form";
import AppFrame from "../../../modules/main/components/AppFrame";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}
const headCells = [
  {
    id: "id",
    align: "left",
    numeric: false,
    disablePadding: false,
    label: "id"
  },
  { id: "firstname", numeric: false, disablePadding: true, label: "Ім'я" },
  { id: "lastname", numeric: false, disablePadding: true, label: "Прізвище" },
  {
    id: "email",
    numeric: false,
    disablePadding: true,
    label: "Електронна пошта"
  },
  { id: "age", numeric: false, disablePadding: false, label: "Вік" },
  { id: "phone", numeric: false, disablePadding: true, label: "Телефон" }
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

//**TableToolbar================================ */
const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: "1 1 100%"
  }
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected, onRefresh, onAdd, onDelete, onEdit } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} вибрано
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Довідник користувачів
        </Typography>
      )}

      {numSelected > 0 ? (
        <>
          <Tooltip title="Edit">
            <IconButton aria-label="edit" onClick={onEdit}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <>
          <Tooltip title="Refresh">
            <IconButton aria-label="refresh" onClick={onRefresh}>
              <Refresh />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add">
            <IconButton aria-label="add" onClick={onAdd}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

//** function Users */
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    // width: "100%",
    margin: theme.spacing(1)
    // marginBottom: theme.spacing(1)
  },
  popover: {
    width: "100%"
    // margin: theme.spacing(1)
    // marginBottom: theme.spacing(1)
  },
  table: {
    minWidth: 750
  },
  tableWrapper: {
    overflowX: "auto"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

export default function Users(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [isAdd, setIsAdd] = React.useState(true);
  // const [dense, setDense] = React.useState(false);//Вибір ширини рядків
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //**rrr */
  const { rows0 } = props;
  const [rows, setRows] = React.useState(rows0); //Рядки таблиці
  const [defaultValue, setDefaultValue] = React.useState([]); //Значення для форми
  const emptyRowDefault = {
    //Значення для форми (При добавлені)
    age: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: ""
  };
  //** */

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  //Вилучення записів(кнопка)
  const onDelete = async () => {
    const rowsSelected = rows.filter(row => isSelected(row.id)); //Масив відмічених записів)
    // console.log("users-tabl-fetch.js/onDelete/rowsSelected=", rowsSelected);
    try {
      //await забезпечує синхронність(почерговість) в асинхронному запиті
      await rowsDelete(rowsSelected); //Самевилучення відмічених звписів(rowsSelected-масив відмічених записів)
      await setSelected([]); //Знімаємо відмітку з усіх записів
      await onRefresh(); //Оновлення даних таблиці
    } catch (error) {
      // console.log(error);
    }
  };
  //Вилучення записів(запит)
  const rowsDelete = async rows => {
    // console.log("psql-users-table-fetch.js/rowDelete/row=", rows);
    const url = "http://localhost:3000/api/psql-users"; //вибрати все-працює
    const options = {
      method: "DELETE",
      body: JSON.stringify(rows)
    };
    const response = await fetch(url, options);
    // const resDelete = await response.json(); //повертає тіло відповіді json
    // const resDelete = await response; //повертає тіло відповіді
    // alert(`Вилучено ${resDelete} записів`);
    if (response.ok) {
      // якщо HTTP-статус в диапазоне 200-299
      const resDelete = await response.json(); //повертає тіло відповіді json
      alert(`Вилучено ${resDelete} записів`);
      console.log(`psql-...-fetch.js/Вилучено ${resDelete} записів`);
    } else {
      const err = await response.json(); //повертає тіло відповіді json
      alert(`Помилка вилучення записів! ${err.message} / ${err.stack}`);
      console.log(
        `+++psql-...-fetch.js/DELETE/ ${err.message} / ${err.stack} `
      );
    }
  };

  //Оновлення даних таблиці
  const onRefresh = async () => {
    console.log("psql-users-table-fetch.js/onRefresh=");
    const url = "http://localhost:3000/api/psql-users"; //вибрати все-працює
    const options = { method: "GET" }; //method: "GET"
    const response = await fetch(url, options);
    if (response.status === 200 && response) {
      const json = await response.json(); //повертає тіло відповіді json
      console.log("json.length=", json.length);
      setRows(json);
    }
  };

  //Добавалення запису(натискання кнопки)
  function onAdd() {
    console.log("psql-users-table-fetch.js/onAdd");
    //Викликаємо форму для заповнення даних
    setDefaultValue(emptyRowDefault); //Початкові дані для заповнення полів вводу
    setIsAdd(true); //Для форми(добавлення чи коригування)
    setDialogOpen(true); //Відкриваємо форму для занесення інфи
  }
  //Добавалення запису(запит)(викликається з форми вводу даних)
  const rowAdd = async user => {
    // alert("psql-users-table-fetch.js/rowAdd");
    //Запит до сервера БД
    console.log("psql-users-table-fetch.js/rowAdd/user=", user);
    const url = "http://localhost:3000/api/psql-users"; //вибрати все-працює
    const options = {
      method: "POST",
      body: JSON.stringify(user)
    };
    const response = await fetch(url, options);
    // alert("+++psql-...-fetch.js/response.status= " + response.status);
    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      const row = await response.json(); //повертає тіло відповіді json
      // console.log("row.length=", row.length);
      // console.log("row=", row);
      const rows1 = [...rows]; //копіюємо масив
      rows1.push(...row); //добавляємо в кінець масиву
      // console.log("***psql-users-table-fetch.js/rowAdd/rows1: ", rows1);
      setRows(rows1);
      alert("Запис успішно добавленo");
    } else {
      const err = await response.json(); //повертає тіло відповіді json
      alert(`Запис не добавлено! ${err.message} / ${err.stack}`);
      // console.log(`+++psql-...-fetch.js/ ${err.message} / ${err.stack} `);
    }
  };

  //Добавалення запису(натискання кнопки)
  function onEdit() {
    // alert(`psql-users-table-fetch.js/onEdit`);
    //Викликаємо форму для заповнення даних
    setDefaultValue(rows.filter(row => isSelected(row.id))[0]); //Початкові дані для заповнення полів вводу
    setIsAdd(false); //Для форми(добавлення чи коригування)
    setDialogOpen(true); //Відкриваємо форму для занесення інфи
  }
  //Коригування запису(ланцюжок послідовних дій)(викликається з форми вводу даних)
  const rowEdit = async newRow => {
    // alert(`psql-users-table-fetch.js/rowEdit`);
    try {
      //await забезпечує синхронність(почерговість) в асинхронному запиті
      const rowsSelected = rows.filter(row => isSelected(row.id)); //Масив відмічених записів)
      const rowsid = rowsSelected.map(row => +row.id); // id список рядків для вилучення /
      await rowEditQuery(newRow, rowsid); //Самевилучення відмічених звписів(rowsSelected-масив відмічених записів)
      // await onRefresh(); //Оновлення даних таблиці
    } catch (error) {
      // console.log(error);
    }
  };

  //Коригування запису(запит)(викликається з rowEdit)
  const rowEditQuery = async (newRow, rowsid) => {
    // console.log("***psql-users-table-fetch.js/rowEditQuery");
    newRow["rowsid"] = rowsid; //Добавляє в об'єкт newRow властивість 'rowsid' = rowsid;
    const dataBody = newRow;
    // console.log("***psql-...-fetch.js/rowEditQuery/dataBody=",dataBody);
    // alert(`psql-users-table-fetch.js/rowEditQuery`);

    //Запит до сервера БД
    const url = "http://localhost:3000/api/psql-users"; //вибрати все-працює
    const options = {
      method: "PUT",
      body: JSON.stringify(dataBody)
    };
    const response = await fetch(url, options);
    // alert("+++psql-...-fetch.js/PUT/response.status= " + response.status);
    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      const resEdit = await response.json(); //повертає тіло відповіді json
      alert(`Змінено ${resEdit} записів`);
      // console.log(`psql-...-fetch.js/Змінено ${resEdit} записів`);
      editRowsInTable(newRow, rowsid); //Зміна значень відмічених записів в таблиці
    } else {
      const err = await response.json(); //повертає тіло відповіді json
      alert(`Помилка зміни записів! ${err.message} / ${err.stack}`);
      // console.log(
      //   `+++psql-...-fetch.js/UPDATE/ ${err.message} / ${err.stack} `
      // );
    }
  };

  //**Dialog / відкриває Popper*/
  const [dialogOpen, setDialogOpen] = useState(false);
  // const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  function handleDialogClose() {
    setDialogOpen(false);
    // console.log("handleDialogClose()/setDialogOpen= ", dialogOpen);
  }
  //** */

  return (
    <AppFrame>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {/* // Показуємо TableToolbar i передаємо йому параметри*/}
          <EnhancedTableToolbar
            numSelected={selected.length}
            onRefresh={onRefresh}
            onAdd={onAdd}
            onDelete={onDelete}
            onEdit={onEdit}
          />
          <div className={classes.tableWrapper}>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              // size={dense ? "small" : "medium"}
              size={"small"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={event => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell align="left">{row.firstname}</TableCell>
                        <TableCell align="left">{row.lastname}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.age}</TableCell>
                        <TableCell align="left">{row.phone}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  //height: 33-висота рядка
                  <TableRow style={{ height: 33 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        {/* //випадаюче вівкно UsersForm*/}
        <Popover
          className={classes.popover}
          open={dialogOpen}
          onClose={handleDialogClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 800, left: 0 }}
          width="100%"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
        >
          {/*UsersForm. */}
          <UsersForm
            rowAdd={rowAdd} //Ф-ція для добавлення запису
            rowEdit={rowEdit} //Ф-ція для коригування запису
            isAdd={isAdd} // Чи це добавлення чи коригування
            defaultValue={defaultValue} //Значення полів вибраного рядка
          />
        </Popover>
      </div>
    </AppFrame>
  );
}

///Це статична асинхронна функція для отримання даних як реквізити для сторінки.
Users.getInitialProps = async function() {
  let rows0 = [];

  const url = "http://localhost:3000/api/psql-users"; //вибрати все-працює
  const options = { method: "GET" }; //method: "GET"
  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(user)
  // };

  //** без.then Працює */
  const response = await fetch(url, options);
  console.log(`****/ psql-users/response: ${response}`);
  if (response.status >= 200 && response.status < 300) {
    // if (response.ok) {
    const rows = await response.json(); //повертає тіло відповіді json
    console.log("Успіх:rows=", rows);
    console.log("Успіх:rows.length=", rows.length);
    return { rows0: rows };
  } else {
    console.log(`****Помилка в отриманні даних HTTP: ${response.status}`);
  }
  //** */

  //**Проміси(з.then) ПРАЦЮЄ!!
  //https://stackoverflow.com/questions/53412109/fetch-returns-undefined-when-imported
  // const fetchedData = await fetch(url, options)
  //   .then(result => {
  //     if (result.status >= 200 && result.status < 300) {
  //       return result.json();
  //     } else {
  //       let error = new Error(res.statusText);
  //       error.response = result;
  //       throw error;
  //       return [];
  //     }
  //   })
  //   .catch(e => {
  //     console.log("fetchError: " + e.message);
  //     console.log(e.response);
  //   });
  // console.log("-+------fetchedData=", fetchedData);
  // return { rows0: fetchedData };
  //*** */
};
//--------
