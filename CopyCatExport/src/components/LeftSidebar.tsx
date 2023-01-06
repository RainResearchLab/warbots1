import * as React from "react";
import "./LeftSidebar.css";
import iconlyLightBag from "../assets/iconlyLightBag.svg";
import iconlyLightPlus from "../assets/iconlyLightPlus.svg";
import iconlyLightActivity from "../assets/iconlyLightActivity.svg";
import image2 from "../assets/image2.png";
import Button from "./Button";
import ButtonText from "./ButtonText";
const LeftSidebar = (props: {
  iconlyLightBag: string,
  iconlyLightActivity: string,
  assets: string,
  iconlyLightHome: string,
  iconlyLightPlus: string,
  buttonText: {
    button: string,
  },
  mint: string,
  iconlyLightMessage: string,
  home: string,
  buttonText1: {
    button: string,
  },
  buttonText2: {
    button: string,
  },
  reports: string,
  buttonText3: {
    button: string,
  },
  iconlyLightSwap: string,
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
  className?: string,
}) => {
  return (
    <div className={`left-sidebar ${props.className || ""}`}>
      <div className="left-container">
        <img className="image-2" src={image2} />
        <div className="flex-container-2">
          <ButtonText className="button-text-instance" {...props.buttonText} />
          <span className="home">{props.home || "Home"}</span>
        </div>
        <div className="flex-container-3">
          <ButtonText
            className="button-text-instance-1"
            {...props.buttonText3}
          />
          <img
            className="iconly-light-bag"
            src={props.iconlyLightBag || iconlyLightBag}
          />
        </div>
        <div className="flex-container-4">
          <ButtonText
            className="button-text-instance-2"
            {...props.buttonText2}
          />
          <img
            className="iconly-light-activity"
            src={props.iconlyLightActivity || iconlyLightActivity}
          />
          <span className="reports">{props.reports || "Reports"}</span>
        </div>
        <div className="flex-container-5">
          <ButtonText
            className="button-text-instance-3"
            {...props.buttonText1}
          />
          <img
            className="iconly-light-plus"
            src={props.iconlyLightPlus || iconlyLightPlus}
          />
          <span className="mint">{props.mint || "Mint"}</span>
        </div>
        <Button className="button-instance-1" {...props.button} />
        <Button className="button-instance-2" {...props.button1} />
      </div>
    </div>
  );
};
export default LeftSidebar;
