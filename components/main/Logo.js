//logo.js
import Link from "next/link";
import { useContext } from "react";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";
// import DrawerButton from "../Navigation/DrawerBootton";
import Drawer from "../navigation/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const { locale, t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const drawerOnClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="logo">
      {/* Іконка гамбургер лівого виїздного меню */}
      <a className="icon" onClick={drawerOnClick}>
        {drawerOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </a>
      {/* <DrawerButton drawerOpen={drawerOpen} drawerOnClick={drawerOnClick} /> */}
      <Link href="/[lang]" as={`/${locale}`}>
        <img
          title={t("logo_logoTitle")}
          src="/icons/SunRa48.png"
          alert="logo"
        />
      </Link>
      <Link href="/[lang]" as={`/${locale}`}>
        <a title={t("logo_logoTitle")} className="text">
          {t("logo_siteName")}
        </a>
      </Link>
      {/* Саме ліве виїздне меню */}
      <Drawer drawerOpen={drawerOpen} drawerOnClick={drawerOnClick} />
      <style jsx>{`
        .logo {
          margin: 0;
          padding: 0;
          display: flex;
         // max-width: 400px;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
        }
        .logo img {
          margin-left: 5px; //Відступ від кожного елемента зліва
          width: 40px;
          height: 40px;
        }
        .logo a {
          margin-left: 5px; //Відступ від кожного елемента зліва
          //background: ${theme.colors.backgroundHead};
          color: ${theme.colors.textHead};
          font-weight: 600;
          font-family: ${theme.fontFamily.sansSerif};
        }

        @media (max-width: 600px) {
          .text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
export default Logo;
