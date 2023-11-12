import React from "react";

function BoxColor(props) {
  let rgb = `rgb(${props.r}, ${props.g}, ${props.b})`;
  const divStyle = {
    backgroundColor: rgb,
    color: props.color,
    padding: "20px",
    border: "1px solid black",
    margin: "10px 0px",
    textAlign: "center",
  };
  console.log(divStyle);
  return (
    <div className="BoxColor" style={divStyle}>
      {" "}
      {rgb} <br />
      {props.children}
    </div>
  );
}

export default BoxColor;
