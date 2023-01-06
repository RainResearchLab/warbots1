import * as React from "react";
import "./RightSidebar.css";
import RightSidebar from "./RightSidebar";
const RightSidebar = (props: {
  rightSidebar: {
    button1: {
      unstyledButton: {
        buttonText: {
          button: string,
        },
      },
    },
    warbot99: string,
    myAccount: string,
    moreAssets: string,
    num1820Busd: string,
    iconlyLightSwap1: string,
    line5: string,
    warbot102: string,
    num1100Busd: string,
    ixcguwcpqhzeo: string,
    soldierSince: string,
    soldierProfile: string,
    button: {
      unstyledButton: {
        buttonText: {
          button: string,
        },
      },
    },
    warbotsValue: string,
    june222020: string,
    myAssets: string,
  },
  className?: string,
}) => {
  return (
    <div className={`right-sidebar-1 ${props.className || ""}`}>
      <RightSidebar
        className="right-sidebar-instance-3"
        {...props.rightSidebar}
      />
    </div>
  );
};
export default RightSidebar;
