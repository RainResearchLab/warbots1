import * as React from "react";
import "./Button.css";
import UnstyledButton from "./UnstyledButton";
const Button = (props: {
  unstyledButton: {
    buttonText: {
      button: string,
    },
  },
  className?: string,
}) => {
  return (
    <button className={`button ${props.className || ""}`}>
      <UnstyledButton
        className="unstyled-button-instance-1"
        {...props.unstyledButton}
      />
    </button>
  );
};
export default Button;
