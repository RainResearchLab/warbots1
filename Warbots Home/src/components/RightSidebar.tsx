import * as React from "react";
import "./RightSidebar.css";
const RightSidebar = (props: {
  myAssets: string,
  soldierProfile: string,
  button: {
    unstyledButton: {
      buttonText: {
        button: string,
      },
    },
  },
  soldierSince: string,
  myAccount: string,
  warbotsValue: string,
  line5: string,
  warbot102: string,
  moreAssets: string,
  num1100Busd: string,
  june222020: string,
  iconlyLightSwap1: string,
  warbot99: string,
  num1820Busd: string,
  mdpbwjfowhest: string,
  button1: {
    unstyledButton: {
      buttonText: {
        button: string,
      },
    },
  },
  className?: string,
}) => {
  return (
    <div className={`right-sidebar-1 ${props.className || ""}`}>
      <span className="my-account">{props.myAccount || "My Account"}</span>
      <div className="flex-container-15">
        <span>{props.soldierSince || "Soldier Since"}</span>
        <span className="june-22-2020">
          {props.june222020 || "June 22, 2020"}
        </span>
      </div>
      <div className="flex-container-16">
        <span>{props.warbotsValue || "Warbots Value"}</span>
        <span className="rtxlzihgaibwf">
          {props.mdpbwjfowhest || "$$$,$$$"}
        </span>
      </div>
      <hr className="line-5" src={props.line5 || line5} />
      <span className="my-assets">{props.myAssets || "My Assets"}</span>
      <div className="flex-container-17">
        <span className="warbot-102">{props.warbot102 || "WARBOT #102"}</span>
        <span className="num-1820-busd">
          {props.num1820Busd || "$1820 BUSD"}
        </span>
      </div>
      <div className="flex-container-18">
        <span className="warbot-99">{props.warbot99 || "WARBOT #99"}</span>
        <span className="num-1100-busd">
          {props.num1100Busd || "$1100 BUSD"}
        </span>
      </div>
      <span className="more-assets">
        {props.moreAssets || "More assets..."}
      </span>
    </div>
  );
};
export default RightSidebar;
