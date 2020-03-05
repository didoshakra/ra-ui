//https://medium.com/codefully-io/react-forms-validation-with-formik-and-material-ui-1adf0c1cae5c
//React forms (validation) with Formik and Material-UI
//електронний лист із даними контактної форми.//example-formix-mui-contact/index.js
//-----------------------------------------------------------------------------------
//users_form.js

import React, { useState } from "react";
// import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  container: {
    display: "Flex",
    justifyContent: "center"
  },
  card: {
    width: "100%",
    margin: theme.spacing(1)
    // marginTop: 10
  },
  actions: {
    float: "right"
  },
  textFild: {
    margin: theme.spacing(1)
    // minWidth: 120
    // width: 20
  },
  textFildLable: {
    color: "green",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "18px",
    fontStyle: "italic"
  }
}));

function UsersForm(props) {
  const classes = useStyles();
  const { rowAdd, rowEdit, isAdd, defaultValue } = props;
  // console.log("users_form.js/defaultValue=", defaultValue);

  return (
    <React.Fragment>
      <Card className={classes.card}>
        {/* Заголовок вікна вводу // variant="body2"*/}
        {/* <Typography
          className={classes.title}
          variant="subtitle2"
          id="tableTitle"
        >
          Введіть дані
        </Typography> */}
        <CardContent>
          <Formik
            initialValues={{
              firstname: defaultValue.firstname,
              lastname: defaultValue.lastname,
              email: defaultValue.email,
              age: defaultValue.age,
              phone: defaultValue.phone,
              course: "",
              birthday: ""
            }}
            validationSchema={Yup.object().shape({
              firstname: Yup.string()
                .max(15, "Повинно бути 15 символів або менше")
                .required("Не вказано Ім'я"),
              lastname: Yup.string()
                .max(20, "Повинно бути 20 символів або менше")
                .required("Не вказано прізвище"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Не вказано email"),
              age: Yup.number()
                .required("Не вказано вік")
                .max(201, "Не більше 200"),
              phone: Yup.number().required("Не вказано телефон"),
              course: Yup.string().required("Не вказано вид діяльності"),
              birthday: Yup.date().required("Не вказано дату народження")
            })}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              setTimeout(() => {
                // submit to the server
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                //Виклик ф-ції запису в БД
                if (isAdd) rowAdd(values);
                else rowEdit(values); //Виклик ф-ції запису в БД
              }, 1000);
            }}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
                isAdd
              } = props;
              const courseCategory = [
                {
                  value: "webDevelopment",
                  label: "Web Development" //Web розробка
                },
                {
                  value: "networking",
                  label: "Networking" //Мережі
                },
                {
                  value: "computerScience",
                  label: "Computer Science" //Інформатика
                }
              ];
              return (
                <form onSubmit={handleSubmit}>
                  <TextField
                    className={classes.textFild}
                    style={{ width: 150 }}
                    id="firstname"
                    label="Ім'я"
                    InputLabelProps={{
                      shrink: true, //піднімає lable вверх
                      className: classes.textFildLable
                    }}
                    defaultValue={defaultValue.firstname}
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.firstname ? errors.firstname : ""}
                    error={touched.firstname && Boolean(errors.firstname)}
                    margin="dense" //Вертикальний інтервал ("dense"/щільний and "normal")
                    size="small" //по замовчуванню "normal"
                    // variant="outlined" //-обрамлений/по замовчуванню "standart"/"filled"-заповнений
                    // fullWidth //поле на всю ширину
                  />
                  <TextField
                    className={classes.textFild}
                    style={{ width: 200 }}
                    id="lastname"
                    label="Прізвище"
                    InputLabelProps={{
                      shrink: true, //піднімає lable вверх
                      className: classes.textFildLable
                    }}
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.lastname ? errors.lastname : ""}
                    error={touched.lastname && Boolean(errors.lastname)}
                    margin="dense" //Вертикальний інтервал ("dense"/щільний and "normal")
                    size="small" //по замовчуванню "normal"
                    // fullWidth //Навсю довжину
                  />
                  <TextField
                    className={classes.textFild}
                    style={{ width: 150 }}
                    id="email"
                    label="Email"
                    InputLabelProps={{
                      shrink: true, //піднімає lable вверх
                      className: classes.textFildLable
                    }}
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.email ? errors.email : ""}
                    error={touched.email && Boolean(errors.email)}
                    margin="dense"
                    size="small" //по замовчуванню "normal"
                  />
                  <TextField
                    className={classes.textFild}
                    style={{ width: 50 }}
                    id="age"
                    label="Вік"
                    InputLabelProps={{
                      shrink: true, //піднімає lable вверх
                      className: classes.textFildLable
                    }}
                    type="number"
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.age ? errors.age : ""}
                    error={touched.age && Boolean(errors.age)}
                    margin="dense"
                    size="small" //по замовчуванню "normal"
                  />
                  <TextField
                    className={classes.textFild}
                    style={{ width: 150 }}
                    id="phone"
                    label="Телефон"
                    InputLabelProps={{
                      shrink: true, //піднімає lable вверх
                      className: classes.textFildLable
                    }}
                    type="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.phone ? errors.phone : ""}
                    error={touched.phone && Boolean(errors.phone)}
                    margin="dense"
                    size="small" //по замовчуванню "normal"
                  />
                  <TextField
                    className={classes.textFild}
                    style={{ width: 200 }}
                    select //вибір із списку
                    id="course"
                    label="Діяльність"
                    InputLabelProps={{
                      shrink: true, //піднімає lable вверх
                      className: classes.textFildLable
                    }}
                    onChange={handleChange("course")}
                    helperText={touched.course ? errors.course : ""}
                    error={touched.course && Boolean(errors.course)}
                    margin="dense"
                    size="small" //по замовчуванню "normal"
                  >
                    {courseCategory.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    className={classes.textFild}
                    style={{ width: 180 }}
                    id="birthday"
                    label="Дата народження"
                    InputLabelProps={{
                      shrink: true, //піднімає lable вверх
                      className: classes.textFildLable
                    }}
                    type="date"
                    value={values.birthday}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.birthday ? errors.birthday : ""}
                    error={touched.birthday && Boolean(errors.birthday)}
                    margin="dense"
                    size="small" //по замовчуванню "normal"
                  />

                  <CardActions className={classes.actions}>
                    <Button
                      type="submit"
                      color="primary"
                      disabled={isSubmitting}
                      // onClick={handleReset}
                    >
                      Записати
                    </Button>
                    <Button
                      // type="button"//По замовчуванню type="button"
                      color="secondary"
                      variant="outlined" //Обрамлення/по замовчуванню- без Обрамлення
                      onClick={handleReset}
                      disabled={!dirty || isSubmitting} //Активна тільки коли щось введено
                    >
                      Очистити
                    </Button>
                  </CardActions>
                </form>
              );
            }}
          </Formik>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
export default UsersForm;

// export default withStyles(styles)(UsersForm);
