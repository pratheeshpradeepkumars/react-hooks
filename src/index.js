import React from "react";
import ReactDOM from "react-dom";

import useMousePosition from "./mousePosition";
import Child from "./child";

import "./styles.css";

function MouseRender() {
  const mouse = useMousePosition();
  return (
    <div>
      Mouse X : {mouse.x} Mouse Y : {mouse.y}
      <Child {...mouse} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MouseRender />, rootElement);
