import * as React from "react";
import "./ButtonText.css";
const ButtonText = (props) => {
  return (
    <div className={`button-text ${props.className || ""}`}>
      {props.button || "Connect Wallet"}
    </div>
  );
};
export default ButtonText;
