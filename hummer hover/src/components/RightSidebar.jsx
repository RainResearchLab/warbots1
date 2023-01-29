import * as React from "react";
import "./RightSidebar.css";
const RightSidebar = (props) => {
  return (
    <div className={`right-sidebar-1 ${props.className || ""}`}>
      <span className="my-account">{props.myAccount || "My Account"}</span>
      <div className="flex-container-8">
        <span>{props.soldierSince || "Soldier Since"}</span>
        <span className="june-22-2020">
          {props.june222020 || "June 22, 2020"}
        </span>
      </div>
      <div className="flex-container-9">
        <span>{props.warbotsValue || "Warbots Value"}</span>
        <span className="ylbcmspgyflkx">
          {props.ggdhoxtsatsyc || "$$$,$$$"}
        </span>
      </div>
      <hr className="line-5" src={props.line5 || line5} />
      <span className="my-assets">{props.myAssets || "My Assets"}</span>
      <div className="flex-container-10">
        <span>{props.warbot102 || "WARBOT #102"}</span>
        <span className="num-1820-busd">
          {props.num1820Busd || "$1820 BUSD"}
        </span>
      </div>
      <div className="flex-container-11">
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
