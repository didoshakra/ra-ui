//Backdrop.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
//Компонент для кліку в любому місці екрану, для закриття Drower-затемнений <div> на весь екран
import React from "react";

const Button = (props) => {
  // const width = props.width || "100px";
  const disabled = props.disabled || "false";
  const width = props.width || ""; //Параметр або довжина техта
  const height = props.height || ""; //Параметр або fontSize
  // const borderColor = props.borderColor || "rgb(233, 13, 13)";
  const borderColor = props.borderColor || "";
  const borderStyle = props.borderStyle || "solid";
  const borderWidh = props.borderWidh || "2px";
  const borderRadius = props.borderRadius || "";
  const backgroundColor = props.backgroundColor || "rgba(117,156,93,0.69)";
  // const backgroundColor = props.backgroundColor || "";
  const backgroundColorHover = props.backgroundColorHover || "#70B4E6;";
  const text = props.text || "button";
  const fontFamily = props.tfontFamily || "";
  const fontSize = props.fontSize || "";
  const fontWeight = props.fontWeight || "";

  return (
    <div className="button" onClick={props.buttonOnClick}>
      {text}
      <style jsx>{`
        .button {
          display: fllex-line; //щоб не переносилась
          position: relative;
          //padding: 1px;
          background: ${backgroundColor};
          width: ${width};
          height: ${height};
          border: ${borderWidh} ${borderStyle} ${borderColor}; /* Параметры границы */
          border-radius: ${borderRadius};
          font-family: ${fontFamily};
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          opacity: ${disabled ? ".5" : "1"};
          cursor: ${disabled ? " not-allowed" : ""};
        }
        .button:hover {
          background-color: ${backgroundColorHover};
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
export default Button;
