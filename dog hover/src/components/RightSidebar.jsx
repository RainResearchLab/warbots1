import * as React from "react";
import "./RightSidebar.scss";
import RightSidebar from "./RightSidebar";
import UnstyledButton from "./UnstyledButton";
const RightSidebar = (props) => {
  return (
    <div className={`right-sidebar-1 ${props.className || ""}`}>
      <div className="image-3-2">
        <UnstyledButton
          className="wallet-connect-instance"
          {...props.unstyledButton}
        />
      </div>
      <div className="cat-absolute-container">
        {props.soldierProfile || "SOLDIER PROFILE"}
      </div>
      <RightSidebar
        className="right-sidebar-instance-3"
        {...props.rightSidebar}
      />
    </div>
  );
};
export default RightSidebar;
