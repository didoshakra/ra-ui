//DynamicAppTheme.js
//Дунамічний імпорт //https://ru.reactjs.org/docs/code-splitting.html#reactlazy
//https://medium.com/@magbicaleman/intro-to-dynamic-import-in-create-react-app-6305bb397c46
//!!! Не працює!!!

// const path = app;
const path = "mag_stan";
export const themeDark1 = (path) => {
  import(`../styles/temes_app/${path}`).then((path) => {
    // console.log("DynamicAppTheme.js/path.themeDark1", path.themeDark1);
    return path.themeDark1;
  });
};
export const themeLith1 = (path) => {
  import(`../styles/temes_app/${path}`).then((path) => {
    // console.log("DynamicAppTheme.js/path.themeLith1", path.themeLith1);
    return path.tthemeLith1;
  });
};

// function DynamicAppTheme() {
// const DynamicAppTheme = () => {
// export function DynamicAppTheme() {
//   const { state } = useContext(ComponentContext);
//   const { app } = state.app;
//   const [themeDark1, setThemeDark1] = React.useState();
//   const [themeLith1, setThemeLith1] = React.useState();

//   React.useEffect(() => {
//     const path = app;
//     // const path = "mag_stan";
//     import(`../styles/temes_app/${path}`).then((path) => {
//       console.log("DynamicAppTheme.js/path.themeDark1", path.themeDark1);
//       console.log("DynamicAppTheme.js/path.themeLith1", path.themeLith1);
//       setThemeDark1(path.themeDark1);
//       setThemeLith1(path.themeLith1);
//       console.log("DynamicAppTheme.js/themeDark1", themeDark1);
//       console.log("DynamicAppTheme.js/themeLith1", themeLith1);
//     });
//   });

//   return {
//     themeDark1,
//     themeLith1,
//   };
// }

// export const themeDark1 = DynamicAppTheme.themeDark1;
// export const themeLith1 = DynamicAppTheme.themeLith1;
