import * as React from "react";
import "./UnstyledButton.css";
import ButtonText from "./ButtonText";
const UnstyledButton = (props) => {
  return (
    <button className={`unstyled-button ${props.className || ""}`}>
      <ButtonText className="button-text-instance-5" {...props.buttonText} />
    </button>
  );
};
export default UnstyledButton;
