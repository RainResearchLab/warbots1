import * as React from "react";
import "./LeftSidebar.css";
import image31 from "../assets/image31.png";
import image2 from "../assets/image2.png";
import iconlyLightPlus1 from "../assets/iconlyLightPlus1.svg";
import iconlyLightActivity from "../assets/iconlyLightActivity.svg";
import iconlyLightBag from "../assets/iconlyLightBag.svg";
import ButtonText from "./ButtonText";
import Button from "./Button";
const LeftSidebar = (props: {
  button: {
    unstyledButton: {
      buttonText: {
        button: string,
      },
    },
  },
  button1: {
    unstyledButton: {
      buttonText: {
        button: string,
      },
    },
  },
  buttonText: {
    button: string,
  },
  buttonText2: {
    button: string,
  },
  iconlyLightHome: string,
  iconlyLightBag: string,
  iconlyLightActivity: string,
  iconlyLightSwap: string,
  iconlyLightMessage: string,
  assets: string,
  buttonText1: {
    button: string,
  },
  buttonText3: {
    button: string,
  },
  reports: string,
  home: string,
  mint: string,
  iconlyLightPlus1: string,
  className?: string,
}) => {
  return (
    <div className={`left-sidebar ${props.className || ""}`}>
      <div className="left-container">
        <img className="image-2-1" src={image2} />
        <div className="flex-container-11">
          <ButtonText
            className="button-text-instance-5"
            {...props.buttonText}
          />
          <span className="home-1">{props.home || "Home"}</span>
        </div>
        <div className="flex-container-12">
          <ButtonText
            className="button-text-instance-2"
            {...props.buttonText3}
          />
          <img
            className="iconly-light-bag"
            src={props.iconlyLightBag || iconlyLightBag}
          />
        </div>
        <div className="flex-container-13">
          <ButtonText
            className="button-text-instance-3"
            {...props.buttonText1}
          />
          <img
            className="iconly-light-activity"
            src={props.iconlyLightActivity || iconlyLightActivity}
          />
          <span className="reports">{props.reports || "Reports"}</span>
        </div>
        <div className="flex-container-14">
          <ButtonText
            className="button-text-instance-4"
            {...props.buttonText2}
          />
          <img
            className="iconly-light-plus-1"
            src={props.iconlyLightPlus1 || iconlyLightPlus1}
          />
          <span className="mint">{props.mint || "Mint"}</span>
        </div>
        <Button className="button-instance" {...props.button} />
        <Button className="button-instance-2" {...props.button1} />
      </div>
      <img className="image-3-5" src={image31} />
    </div>
  );
};
export default LeftSidebar;
