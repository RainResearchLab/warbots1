import * as React from "react";
import "./ButtonText.css";
const ButtonText = (props: { button: string, className?: string }) => {
  return (
    <div className={`button-text ${props.className || ""}`}>
      {props.button || "Connect Wallet"}
    </div>
  );
};
export default ButtonText;
