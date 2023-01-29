import * as React from "react";
import "./Button.css";
import UnstyledButton from "./UnstyledButton";
const Button = (props) => {
  return (
    <button className={`button-1 ${props.className || ""}`}>
      <UnstyledButton
        className="normal-button-instance-1"
        {...props.unstyledButton}
      />
    </button>
  );
};
export default Button;
