import * as React from "react";
import "./ButtonText.scss";
const ButtonText = (props) => {
  return (
    <div className={`button-text ${props.className || ""}`}>
      <span className="button">{props.button || "\n"}</span>
    </div>
  );
};
export default ButtonText;
