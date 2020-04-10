//DrawerBootton.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
//Кнопка-гамбургер для лівого меню дравер
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const DrawerButton = props => {
  const { drawerOpen, drawerOnClick } = props;

  return (
    <i className="icon" onClick={drawerOnClick}>
      {drawerOpen ? (
        <FontAwesomeIcon icon={faTimes} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
      <style jsx>{`
        .Button {
          position: fixed;
          top: 40px;
          left: 340px;
          font-size: 20px;
          cursor: pointer;
          color: #fff;
          transition: opacity, 22s ease-in;
          z-index: 100;
        }
        .Button:hover {
          opacity: 0.7; /*При наведенні зменшуємо прозорість*/
        }
        .Button.open {
          left: 320px;
        }
      `}</style>
    </i>
  );
};
export default DrawerButton;
