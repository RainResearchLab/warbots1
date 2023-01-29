import * as React from "react";
import "./LeftSidebar.css";
import image31 from "../assets/image31.png";
import iconlyLightPlus from "../assets/iconlyLightPlus.svg";
import iconlyLightActivity from "../assets/iconlyLightActivity.svg";
import image2 from "../assets/image2.png";
import iconlyLightBag from "../assets/iconlyLightBag.svg";
import ButtonText from "./ButtonText";
import Button from "./Button";
const LeftSidebar = (props) => {
  return (
    <div className={`left-sidebar ${props.className || ""}`}>
      <div className="left-container">
        <img className="image-2-1" src={image2} />
        <div className="flex-container-8">
          <ButtonText
            className="button-text-instance-4"
            {...props.buttonText1}
          />
          <span className="home">{props.home || "Home"}</span>
        </div>
        <div className="flex-container-9">
          <ButtonText
            className="button-text-instance-1"
            {...props.buttonText3}
          />
          <img
            className="iconly-light-bag"
            src={props.iconlyLightBag || iconlyLightBag}
          />
        </div>
        <div className="flex-container-10">
          <ButtonText
            className="button-text-instance-2"
            {...props.buttonText2}
          />
          <img
            className="iconly-light-activity"
            src={props.iconlyLightActivity || iconlyLightActivity}
          />
          <span className="reports-1">{props.reports || "Reports"}</span>
        </div>
        <div className="flex-container-11">
          <ButtonText
            className="button-text-instance-3"
            {...props.buttonText}
          />
          <img
            className="iconly-light-plus"
            src={props.iconlyLightPlus || iconlyLightPlus}
          />
          <span className="mint">{props.mint || "Mint"}</span>
        </div>
        <Button className="button-instance" {...props.button} />
        <Button className="button-instance-2" {...props.button1} />
      </div>
      <img className="image-3-2" src={image31} />
    </div>
  );
};
export default LeftSidebar;
