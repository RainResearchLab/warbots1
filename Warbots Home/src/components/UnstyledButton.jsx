import * as React from "react";
import "./UnstyledButton.css";
import ButtonText from "./ButtonText";
const UnstyledButton = (props) => {
  return (
    <div className={`unstyled-button ${props.className || ""}`}>
      <ButtonText className="button-text-instance-4" {...props.buttonText} />
    </div>
  );
};
export default UnstyledButton;
