import * as React from "react";
import "./ButtonText.css";
const ButtonText = (props) => {
  return (
    <div className={`button-text ${props.className || ""}`}>
      <span className="button">{props.button || "\n"}</span>
    </div>
  );
};
export default ButtonText;
