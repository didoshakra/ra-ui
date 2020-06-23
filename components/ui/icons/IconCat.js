// IconUmbrella.js /Іконка umbrella(Парасолька)

export default function IconCat(props) {
  const colorFill = props.colorFill || "#000";
  const width = props.width || "128";
  const height = props.height || "128";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 400 380"
    >
      <path
        fill={colorFill}
        fillOpacity="1"
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M151.349 307.205h113c0-16.064-1.147-19.25-27.75-19.25 4.25-12.75 21.525-43.597 31.125-43.597 8.493 0 18.625.468 18.625 19.847 0 22 37.023 57.47 46 43 13.379-21.566-23-14.99-23-67 0-71.154 41.525-61.024 41.525-101 0-20-5.525-22.701-5.525-37 0-18.898 16.648-17.801 13.41-33.47-2.238-10.823-3.99-19.503-5.294-32.591-.925-9.287-1.22-19.185-10.866-18.787-11.334.468-15.634 20.417-33.25 21.848-17.58 1.427-32.57-14.967-39.375-12.625-6.747 2.321-4.625 20.625-.625 33.625 6.287 20.432 20 47-5 51s-68 8-99 49-29.856 89.116-42 104c-40.758 49.95-82.525 29.441-82.525 71 0 18.605 31.525 32 36.525 26s-42.485-23.88 10.646-45c45.392-18.045 49.444-21.728 63.354-9z"
      ></path>
    </svg>
  );
}
