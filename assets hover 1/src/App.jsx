import * as React from "react";
import "./App.css";
import iconlyLightMessage from "./assets/iconlyLightMessage.svg";
import iconlyLightSwap from "./assets/iconlyLightSwap.svg";
import iconlyLightBag from "./assets/iconlyLightBag.svg";
import line5 from "./assets/line5.svg";
import line1 from "./assets/line1.svg";
import rectangle24 from "./assets/rectangle24.png";
import iconlyLightSwap1 from "./assets/iconlyLightSwap1.svg";
import iconlyLightPlus from "./assets/iconlyLightPlus.svg";
import iconlyLightHome from "./assets/iconlyLightHome.svg";
import image21 from "./assets/image21.png";
import iconlyLightActivity from "./assets/iconlyLightActivity.svg";
import LeftSidebar from "./components/LeftSidebar";
import Button from "./components/Button";
import RightSidebar from "./components/RightSidebar";
const App = () => {
  const propsData = {
    leftSidebar: {
      reports: "Reports",
      iconlyLightBag: iconlyLightBag,
      mint: "Mint",
      buttonText3: {
        button: "\n",
      },
      iconlyLightPlus: iconlyLightPlus,
      iconlyLightSwap: iconlyLightSwap,
      iconlyLightActivity: iconlyLightActivity,
      buttonText2: {
        button: "\n",
      },
      button: {
        unstyledButton: {
          buttonText: {
            button: "WARBOTS DOCS",
          },
        },
      },
      assets: "Assets",
      home: "Home",
      button1: {
        unstyledButton: {
          buttonText: {
            button: "CLAIM BUSD",
          },
        },
      },
      buttonText1: {
        button: "\n",
      },
      buttonText: {
        button: "\n",
      },
      iconlyLightMessage: iconlyLightMessage,
      iconlyLightHome: iconlyLightHome,
    },
    button: {
      unstyledButton: {
        buttonText: {
          button: "Claim",
        },
      },
    },
    button2: {
      unstyledButton: {
        buttonText: {
          button: "Compound",
        },
      },
    },
    button3: {
      unstyledButton: {
        buttonText: {
          button: "WarHummer\u2028NFT #1",
        },
      },
    },
    button1: {
      unstyledButton: {
        buttonText: {
          button: "Claim 50% & Compound 50%",
        },
      },
    },
    rightSidebar: {
      soldierProfile: "SOLDIER PROFILE",
      unstyledButton: {
        buttonText: {
          button: "Connect Wallet",
        },
      },
      rightSidebar: {
        moreAssets: "More assets...",
        iconlyLightSwap1: iconlyLightSwap1,
        myAssets: "My Assets",
        button1: {
          unstyledButton: {
            buttonText: {
              button: "CONNECT WALLET",
            },
          },
        },
        june222020: "June 22, 2020",
        myAccount: "My Account",
        num1820Busd: "$1820 BUSD",
        warbot102: "WARBOT #102",
        line5: line5,
        soldierSince: "Soldier Since",
        button: {
          unstyledButton: {
            buttonText: {
              button: "CLAIM BUSD",
            },
          },
        },
        num1100Busd: "$1100 BUSD",
        vjlxbkaxusign: "$$$,$$$",
        warbot99: "WARBOT #99",
        warbotsValue: "Warbots Value",
        soldierProfile: "Soldier Profile",
      },
    },
  };
  return (
    <div className="warbots-assets-own">
      <LeftSidebar
        className="left-sidebar-instance-1"
        {...propsData.leftSidebar}
      />
      <div className="image-3">
        <div className="flex-container">
          <div className="flex-container-1">
            <div className="flex-container-2">
              <span>Dashboard &gt; Assets</span>
              <span className="assets">Assets</span>
            </div>
            <img className="image-2" src={image21} />
          </div>
          <div className="flex-container-3">
            <div className="rectangle-18">
              <span className="rewards">REWARDS</span>
              <span className="num-102-busd">102 $BUSD</span>
            </div>
            <img className="rectangle-24" src={rectangle24} />
          </div>
          <div className="flex-container-4">
            <Button className="button-instance-1" {...propsData.button} />
            <Button className="button-2-instance" {...propsData.button2} />
            <Button className="button-3-instance" {...propsData.button3} />
          </div>
          <Button className="button-1-instance" {...propsData.button1} />
        </div>
        <img className="line-1" src={line1} />
      </div>
      <RightSidebar
        className="right-sidebar-instance-2"
        {...propsData.rightSidebar}
      />
    </div>
  );
};
export default App;
