//Header.js
//20200416-добавляю 2-а діва (для верхньої стрічки-HeaderTape і нажнього випадаючого на весь екран MobileMenu)
import { useContext, useEffect } from "react";

import HeaderLogo from "./HeaderLogo";
import { ComponentContext } from "../../context/ComponentContext";
import HeaderMenu from "./HeaderMenu";
import HeaderSeting from "../all/HeaderSeting";
// import HeaderTape from "./HeaderTape";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileMenuDroop from "./MobileMenuDroop";

var lastScrollTop = 0;
var scrolUP = false;

const Header = () => {
  const { state } = useContext(ComponentContext);
  const { theme } = state;
  const heightHeaderTape = "0px"; //Висота header0
  const heightHeader = "64px"; //Висота header0
  const headerNone = "-64px"; //Сховати
  const [headerTop, setHeaderTop] = React.useState(heightHeaderTape); //-відступ зверху/ щоб ховалась /появлялась Head при скролі
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const mobileMenuToggle = (arg) => {
    setMobileMenuOpen(arg);
    // console.log("Menu.js/mobileMenuOpen2/arg =", arg);
  };

  //*** щоб ховалась/появлялась Head при скролі
  function mouseMove() {
    // alert("Ти порухав мишкою!/mousemove");
    // console.log("Header.js/скрол=", pageYOffset);
    // console.log("Header.js/Y=", event.pageY);
    var st = pageYOffset;
    // console.log("Header.js/st=", st + "/lastScrollTop=", lastScrollTop);
    if (st > 10) {
      if (st - lastScrollTop > 0 || (st - lastScrollTop == 0 && !scrolUP)) {
        // console.log("Скрол вниз!");
        scrolUP = false;
        // alert("Скрол вниз!");
        if (st > 200) {
          setHeaderTop("0px");
        } else {
          setHeaderTop(headerNone);
          // downscroll code
        }
      } else {
        if (st > 32) {
          setHeaderTop("0px");
        } else {
          setHeaderTop(heightHeaderTape);
        }
        scrolUP = true;
        // console.log("Скрол вверх!");
      }
    } else {
      setHeaderTop(heightHeaderTape);
    }
    lastScrollTop = st;
  }

  useEffect(() => {
    // Прив’яжіть прослуховувач події
    document.addEventListener("scroll", mouseMove); //Для скролу
    // document.addEventListener("mousemove", mouseMove);//для переміщення мишки (координати)
    return () => {
      // Від’єднайте слухача події під час очищення
      document.removeEventListener("scroll", mouseMove);
      // document.removeEventListener("mousemove", mouseMove);
    };
  });
  //End/*** щоб ховалась.../

  const menu = [
    {
      // a: t("headerMenu_iconTitleAboutME"),
      a: "Grid",
      link: "/examples/grid",
    },
    {
      // a: t("headerMenu_iconTitleAboutME"),
      a: "ui",
      link: "/examples/ui",
    },
    {
      a: "FlexBox",
      link: "/examples/flexbox",
    },
  ];

  return (
    <div className="header">
      {/* <div className="header_tape_wraper"> */}
      {/* <HeaderTape /> */}
      <div className="header__wrapper">
        <HeaderLogo />
        <div className="header__wrapper__menu">
          {/* Навігація */}
          <HeaderMenu menu={menu} />
          {/* іконка мобільного меню/faList/ */}
          <MobileMenuIcon
            mobileMenuOpen={mobileMenuOpen}
            mobileMenuToggle={mobileMenuToggle}
          />
          {/* Налаштування(App,Теми,Мови)*/}
          <HeaderSeting />
        </div>
      </div>
      {/* </div> */}
      {/* <div className="header_mobile-menu_wraper"> */}
      {/* Список мобильного меню */}
      <MobileMenuDroop
        menu={menu}
        mobileMenuOpen={mobileMenuOpen}
        mobileMenuToggle={mobileMenuToggle}
      />
      {/* </div> */}
      <style jsx>{`
        .header {
          /* Для того щоб плавно сховати шапку*/
          margin: 0;
          padding: 0;
          position: fixed;//Відносно Wind //Інші не бачать.як absolute
          position: relative;//Інші бачать.як absolute
          top: ${headerTop};
          height: ${heightHeader};
          width: 100%;
          transition: top 0.4s ease-in;
          z-index: 100;
          //background: ${theme.colors.headBackground};
        }
        /*.header_mobile-menu_wraper {
          position: relative;
          top: 0px;
          display: ${mobileMenuOpen ? "block" : "none"};
          //width: 100%;
          margin: 0;
          padding: 0;
        }*/

        .header__wrapper {
          height: ${heightHeader};
          display: flex;
          justify-content: space-between; /*по-X Вирівнювання вліво-вправо*/
          align-items: center; /* по Y */
          //background: ${theme.colors.headBackground};
          background: ${theme.colors.headBackground};
        }
        .header__wrapper__menu {
          display: flex;
          justify-content: space-end; /*по-X Вирівнювання вправо*/
          align-items: center; /* по Y */
        }

        @media (max-width: 960px) {
          .header {
            position: relative;
            top: 0;
            transition: top 0s ease-in;
          }
          .header__wrapper {
            color: ${theme.colors.headIcon};
            background: ${theme.colors.headMobileBackground};
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
