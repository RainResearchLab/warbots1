import * as React from "react";
import "./LeftSidebar.css";
import iconlyLightBag from "../assets/iconlyLightBag.svg";
import image2 from "../assets/image2.png";
import iconlyLightActivity from "../assets/iconlyLightActivity.svg";
import iconlyLightPlus from "../assets/iconlyLightPlus.svg";
import image31 from "../assets/image31.png";
import ButtonText from "./ButtonText";
import Button from "./Button";
const LeftSidebar = (props) => {
  return (
    <div className={`left-sidebar ${props.className || ""}`}>
      <div className="left-container">
        <img className="image-2-1" src={image2} />
        <div className="flex-container-8">
          <ButtonText
            className="button-text-instance-2"
            {...props.buttonText3}
          />
          <span className="home">{props.home || "Home"}</span>
        </div>
        <div className="flex-container-9">
          <ButtonText
            className="button-text-instance-3"
            {...props.buttonText2}
          />
          <img
            className="iconly-light-bag"
            src={props.iconlyLightBag || iconlyLightBag}
          />
        </div>
        <div className="flex-container-10">
          <ButtonText
            className="button-text-instance-4"
            {...props.buttonText}
          />
          <img
            className="iconly-light-activity"
            src={props.iconlyLightActivity || iconlyLightActivity}
          />
          <span className="reports">{props.reports || "Reports"}</span>
        </div>
        <div className="flex-container-11">
          <ButtonText
            className="button-text-instance-5"
            {...props.buttonText1}
          />
          <img
            className="iconly-light-plus"
            src={props.iconlyLightPlus || iconlyLightPlus}
          />
          <span className="mint-1">{props.mint || "Mint"}</span>
        </div>
        <Button className="button-instance-1" {...props.button1} />
        <Button className="button-instance-3" {...props.button} />
      </div>
      <img className="image-3-1" src={image31} />
    </div>
  );
};
export default LeftSidebar;