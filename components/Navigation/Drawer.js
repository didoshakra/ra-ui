//MenuToggle.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
import React from "react";
import Backdrop from "../UI/Backdrop";

const links = [1, 2, 3];

const Drawer = props => {
  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Link{link}</a>
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <nav className="Drawer">
        <ul>{renderLinks()}</ul>
      </nav>
      {props.drawerOpen ? (
        <Backdrop drawerOnClick={props.drawerOnClick} />
      ) : null}
      {/* <Backdrop /> */}
      <style jsx>{`
        .Drawer {
          position: fixed;
          top: 0;
          /*left: 0;*/
          right: -350px;
          width: 80%;
          max-width: 350px;
          box-sizing: border-box;
          /*background-color: rgba(66, 47, 58, 0.856);*/
          background: #fff;
          /* background: ${props.type == "warning" ? "#fff3cd" : "#eee"}; */
          /* transform: translateX(0px); */
          /*transform: ${
            props.drawerOpen ? "translateX(0px)" : "translateX(-300px)"
          };*/
          transform: ${
            props.drawerOpen ? "translateX(-100%)" : "translateX(0px)"
          };
          transition: transform 0.22s ease-in;
          z-index: 90;
        }

        /* .Drawer ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .Drawer ui li {
          margin-bottom: 15px;
        }
        .Drawer ul li a {
          color: #363d54;
          font-size: 30px;
          text-decoration: none;
          background-color: #fff;
          position: relative;
          padding: 0 20px 10px 20px;
          transition: opacity 0.3s;
        }
        .Drawer ul li a:hover,
        .active {
          opacity: 0.7s;
        } */
      `}</style>
    </React.Fragment>
  );
};
export default Drawer;
