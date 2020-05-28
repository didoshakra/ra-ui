//HeaderSeting
//first-mobile
//Зміна мови і теми+ App меню

import { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";
import HeaderSetingDroop from "./HeaderSetingDroop";
import AppMenuIcon from "./AppMenuIcon";
// import AppMenu from "./AppMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import LocaleSwitcherIcon from "./LocaleSwitcherIcon";
// import LocaleSwitcher from "./LocaleSwitcher";

const HeaderSeting = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  // const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div className="headerSeting">
      {/* Іконки головного меню Seting */}
      <div className="headerSeting_larg">
        {/* App меню */}
        <AppMenuIcon />
        {/* <AppMenu /> */}
        {/* тема */}
        <ThemeSwitcher />
        {/* Мова */}
        <LocaleSwitcherIcon />
        {/* <LocaleSwitcher /> */}
      </div>
      {/* Випадаюче меню Seting(мобільне) */}
      <div className="headerSeting__mobile">
        <HeaderSetingDroop />
      </div>
      <style jsx>
        {`
          //first-mobile
          .headerSeting {
            //padding: 10px;
            height: 64px;
            display: flex;
            justify-content: space-between; //по-X Вирівнювання вліво-вправо
            align-items: center; // по Y
            background: ${theme.colors.headBackground};
          }
          .headerSeting_larg {
            display: none;
          }
          .headerSeting__mobile {
            display: flex;
          }

          @media (min-width: 960px) {
            .headerSeting_larg {
              display: flex;
            }
            .headerSeting__mobile {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeaderSeting;
