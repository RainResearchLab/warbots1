import * as React from "react";
import "./UnstyledButton.css";
import ButtonText from "./ButtonText";
const UnstyledButton = (props: {
  buttonText: {
    button: string,
  },
  className?: string,
}) => {
  return (
    <div className={`unstyled-button ${props.className || ""}`}>
      <ButtonText className="button-text-instance" {...props.buttonText} />
    </div>
  );
};
export default UnstyledButton;
