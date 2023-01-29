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
    <div className={`button-1 ${props.className || ""}`}>
      <UnstyledButton
        className="normal-button-instance-1"
        {...props.unstyledButton}
      />
    </div>
  );
};
export default Button;
