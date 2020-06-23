//DragDroop.js //https://habr.com/ru/post/463463/

const DragDroop = () => {
  const [dragPozocion, setDragPozocion] = React.useState({
    startX: 0,
    startY: 0,
    // deltaXpx: "0px",
    // deltaYpx: "0px",
  });
  const [dragDelta, setDragDelta] = React.useState({
    deltaXpx: "0px",
    deltaYpx: "0px",
  });
  // Перетягування мишкою  https://habr.com/ru/post/463463/
  const handleDragStart = (e) => {
    // console.log(
    //   "handleDraghStart/dragDelta.deltaXpx:",
    //   dragDelta.deltaXpx + " /dragDelta.deltaYpx:" + dragDelta.deltaYpx
    // );
    // console.log(
    //   "handleDraghStart/dragPozocion.startX:",
    //   dragPozocion.startX + " /dragPozocion.startY:" + dragPozocion.startY
    // );
    // console.log("handleDraghStart/x:", e.pageX + " /y:" + e.pageY);
    // setDragPozocion({
    //   startX: e.pageX,
    //   startY: e.pageY,
    // });
  };
  const handleDragEnd = (e) => {
    // console.log(
    //   "handleDraghEnd-1/dragPozocion.startX:",
    //   dragPozocion.startX + " /dragPozocion.startY:" + dragPozocion.startY
    // );
    // console.log(
    //   "handleDraghEnd-1/dragDelta.deltaXpx:",
    //   dragDelta.deltaXpx + " /dragDelta.deltaYpx:" + dragDelta.deltaYpx
    // );
    // console.log("handleDragEnd/x:", e.pageX + " /y:" + e.pageY);
    // d1.style.marginLeft = startX + event.pageX-startCursorX; //позиція елемента + позиція курсора - позиція курсоа на початку перетягуванн
    let newDeltaX = dragPozocion.startX + e.pageX;
    let newDeltaXpx = `${newDeltaX}px`;
    let newDeltaY = dragPozocion.startY + e.pageY;
    let newDeltaYpx = `${newDeltaY}px`;
    // console.log(
    //   "handleDragEnd-2/newDeltaXpx=",
    //   newDeltaXpx + "/newDeltaYpx=" + newDeltaYpx
    // );

    setDragDelta({
      deltaXpx: newDeltaXpx,
      deltaYpx: newDeltaYpx,
    });
    // console.log(
    //   "handleDragEnd/dragDelta.deltaXpx=",
    //   dragDelta.deltaXpx + "/dragDelta.deltaYpx=" + dragDelta.deltaYpx
    // );
  };
  return (
    <div className="header">
      <div
        id="d1"
        className="ddd"
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        Pervii 1
      </div>
      <div id="d2" className="ddd">
        Vtoroy 2
      </div>
      <div id="d3" className="ddd">
        Tretii 3
      </div>
      <div id="d4" className="ddd">
        Chetverty 4
      </div>
      <style jsx>{`
        .ddd {
          display: block;
          float: left;
          padding: 10px;
          border: 1px solid #000;
          //position: absolute;
          transform: translateX(${dragDelta.deltaXpx});
          transition: transform 2s sease;
        }
      `}</style>
    </div>
  );
};
export default DragDroop;
