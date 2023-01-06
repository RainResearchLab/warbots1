import * as React from "react";
import "./ButtonText.css";
const ButtonText = (props: { button: string, className?: string }) => {
  return (
    <div className={`button-text ${props.className || ""}`}>
      {props.button || "WarDog\u2028NFT #1"}
    </div>
  );
};
export default ButtonText;
