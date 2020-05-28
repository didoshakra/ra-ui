// IconMenu.js //Flaticon

export default function IconMenu(props) {
  const colorFill = props.colorFill || "none";
  const colorFill1 = props.colorFill1 || "none";
  const colorFill2 = props.colorFill2 || "none";
  const colorStroke = props.colorStroke || "white";
  const colorStroke1 = props.colorStroke1 || "white";
  const colorStroke2 = props.colorStroke2 || "white";
  const width = props.width || "64";
  const height = props.height || "64";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
    >
      <path
        fill={colorFill}
        stroke={colorStroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M80 160L432 160"
      ></path>
      <path
        fill={colorFill1}
        stroke={colorStroke1}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M80 256L432 256"
      ></path>
      <path
        fill={colorFill2}
        stroke={colorStroke2}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M80 352L432 352"
      ></path>
    </svg>
  );
}
