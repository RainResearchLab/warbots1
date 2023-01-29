import * as React from "react";
import "./Button.css";
import UnstyledButton from "./UnstyledButton";
const Button = (props) => {
  return (
    <button className={`button ${props.className || ""}`}>
      <UnstyledButton
        className="normal-button-instance"
        {...props.unstyledButton}
      />
    </button>
  );
};
export default Button;
