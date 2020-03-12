//Backdrop.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
//Компонент для кліку в любому місці екрану, для закриття Drower-затемнений <div> на весь екран
import React from "react";

const Backdrop = props => {
  return (
    <div className="Backdrop" onClick={props.drawerOnClick}>
      <style jsx>{`
        .Backdrop {
          z-index: 50;
          background: rgba(0, 0, 0, 0.7);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          /* відступи=0 бо треба на весь екран  */
        }
      `}</style>
    </div>
  );
};
export default Backdrop;
