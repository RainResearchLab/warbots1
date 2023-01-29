import * as React from "react";
import "./Button.css";
import UnstyledButton from "./UnstyledButton";
const Button = (props) => {
  return (
    <div className={`button ${props.className || ""}`}>
      <UnstyledButton
        className="normal-button-instance-1"
        {...props.unstyledButton}
      />
    </div>
  );
};
export default Button;
