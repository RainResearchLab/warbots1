import * as React from "react";
import "./ButtonText.css";
const ButtonText = (props) => {
  return (
    <div className={`button-text ${props.className || ""}`}>
      {props.button || "Claim"}
    </div>
  );
};
export default ButtonText;
