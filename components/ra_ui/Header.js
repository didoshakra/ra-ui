//Header.js
import { useContext, useEffect } from "react";
import HeaderLogo from "./HeaderLogo";
import { ComponentContext } from "../../context/ComponentContext";
import HeaderMenu from "./HeaderMenu";
import HeaderSeting from "./HeaderSeting";

var lastScrollTop = 0;
var scrolUP = false;

const Header = () => {
  const { state } = useContext(ComponentContext);
  const { theme } = state;
  const [headerOpen, setHeaderOpen] = React.useState(true); //*** щоб ховалась/появлялась Head при скролі
  // const drawerOnClick = () => {
  //   setDrawerOpen(!drawerOpen);
  // };

  //*** щоб ховалась/появлялась Head при скролі
  function mouseMove() {
    // alert("Ти порухав мишкою!/mousemove");
    // console.log("Header.js/скрол=", pageYOffset);
    // console.log("Header.js/Y=", event.pageY);
    var st = pageYOffset;
    // console.log("Header.js/st=", st + "/lastScrollTop=", lastScrollTop);
    if (st > 100) {
      if (st - lastScrollTop > 0 || (st - lastScrollTop == 0 && !scrolUP)) {
        // console.log("Скрол вниз!");
        scrolUP = false;
        // alert("Скрол вниз!");
        setHeaderOpen(false);
        // downscroll code
      } else {
        setHeaderOpen(true);
        scrolUP = true;
        // console.log("Скрол вверх!");
      }
    } else {
      setHeaderOpen(true);
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

  return (
    <div className="header">
      {/* <Drawer drawerOpen={drawerOpen} drawerOnClick={drawerOnClick} />
      <DrawerButton drawerOpen={drawerOpen} drawerOnClick={drawerOnClick} /> */}
      <div className="header__wrapper">
        <HeaderLogo />
        <div className="header__wrapper__menu">
          {/* Навігація */}
          <HeaderMenu />
          {/* Налаштування(App,Теми,Мови)*/}
          <HeaderSeting />
        </div>
      </div>

      <style jsx>{`
        .header {
          /* Для того щоб плавно сховати шапку*/
          position: fixed;
          top: ${headerOpen ? "0" : "-64px"};
          height: 64px;
          width: 100%;
          transition: top 0.4s ease-in;
          z-index: 100;
        }
        .header__wrapper {
          /*padding: 10px; /*Поля*/
          //max-height: 60px;
          height: 64px;
          display: flex;
          justify-content: space-between; /*по-X Вирівнювання вліво-вправо*/
          align-items: center; /* по Y */
        }
        .header__wrapper__menu {
          display: flex;
          justify-content: space-end; /*по-X Вирівнювання вправо*/
          align-items: center; /* по Y */
        }
      `}</style>
      <style jsx>{`
      .header__wrapper {
        background: ${theme.colors.headBackground};`}</style>
    </div>
  );
};

export default Header;
