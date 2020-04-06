//HeaderSeting //Зміна мови і теми

import { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";
import HeaderSetingMobile from "./HeaderSetingMobile";
import HeaderAppMenu from "./HeaderAppMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import LocaleSwitcherIcon from "./LocaleSwitcherIcon";

const HeaderSeting = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  // const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div className="headerSeting">
      <div className="headerSeting_larg">
        {/* App меню*/}
        <HeaderAppMenu />
        {/* тема */}
        <ThemeSwitcher />
        {/* Мова */}
        <LocaleSwitcherIcon />
      </div>
      <div className="headerSeting__mobile">
        {/* іконки теми+мови */}
        <HeaderSetingMobile />
      </div>

      <style jsx>
        {`
          .headerSeting {
            /*padding: 10px; /*Поля*/
            height: 64px;
            display: flex;
            justify-content: space-between; /*по-X Вирівнювання вліво-вправо*/
            align-items: center; /* по Y */
            background: ${theme.colors.headBackground};
          }
          .headerSeting_larg {
            display: flex;
          }
          /* --- Mobile navigation icon -- */
          .headerSeting__mobile {
            display: none;
            //z-index: 19;
          }
          @media (max-width: 960px) {
            /*iPad<960px*/
            .headerSeting_larg {
              display: none; /*не показує */
            }
            .headerSeting__mobile {
              display: flex;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeaderSeting;
