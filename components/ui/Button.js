//Backdrop.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
//Компонент для кліку в любому місці екрану, для закриття Drower-затемнений <div> на весь екран
import React from "react";

const Button = (props) => {
  return (
    <div className="button" onClick={props.buttonOnClick}>
      {text}
      <style jsx>{``}</style>
    </div>
  );
};
export default Button;
