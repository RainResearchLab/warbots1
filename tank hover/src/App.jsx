import * as React from "react";
import "./App.css";
import rectangle18 from "./assets/rectangle18.png";
import rectangle24 from "./assets/rectangle24.png";
import rectangle25 from "./assets/rectangle25.png";
import rectangle23 from "./assets/rectangle23.png";
import iconlyLightMessage from "./assets/iconlyLightMessage.svg";
import iconlyLightSwap from "./assets/iconlyLightSwap.svg";
import rectangle21 from "./assets/rectangle21.png";
import iconlyLightPlus from "./assets/iconlyLightPlus.svg";
import iconlyLightBag from "./assets/iconlyLightBag.svg";
import iconlyLightActivity from "./assets/iconlyLightActivity.svg";
import iconlyLightHome from "./assets/iconlyLightHome.svg";
import line5 from "./assets/line5.svg";
import image21 from "./assets/image21.png";
import iconlyLightSwap1 from "./assets/iconlyLightSwap1.svg";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Button from "./components/Button";
const App = () => {
  const propsData = {
    rightSidebar: {
      rightSidebar: {
        iconlyLightSwap1: iconlyLightSwap1,
        num1100Busd: "$1100 BUSD",
        warbot102: "WARBOT #102",
        line5: line5,
        button1: {
          unstyledButton: {
            buttonText: {
              button: "CLAIM BUSD",
            },
          },
        },
        myAssets: "My Assets",
        june222020: "June 22, 2020",
        soldierProfile: "Soldier Profile",
        button: {
          unstyledButton: {
            buttonText: {
              button: "CONNECT WALLET",
            },
          },
        },
        moreAssets: "More assets...",
        warbot99: "WARBOT #99",
        num1820Busd: "$1820 BUSD",
        soldierSince: "Soldier Since",
        myAccount: "My Account",
        warbotsValue: "Warbots Value",
        btdukskaijehc: "$$$,$$$",
      },
      unstyledButton: {
        buttonText: {
          button: "Connect Wallet",
        },
      },
      soldierProfile: "SOLDIER PROFILE",
    },
    leftSidebar: {
      button1: {
        unstyledButton: {
          buttonText: {
            button: "CLAIM BUSD",
          },
        },
      },
      home: "Home",
      iconlyLightPlus: iconlyLightPlus,
      buttonText3: {
        button: "\n",
      },
      reports: "Reports",
      iconlyLightBag: iconlyLightBag,
      iconlyLightActivity: iconlyLightActivity,
      iconlyLightSwap: iconlyLightSwap,
      buttonText2: {
        button: "\n",
      },
      buttonText1: {
        button: "\n",
      },
      assets: "Assets",
      iconlyLightHome: iconlyLightHome,
      button: {
        unstyledButton: {
          buttonText: {
            button: "WARBOTS DOCS",
          },
        },
      },
      iconlyLightMessage: iconlyLightMessage,
      mint: "Mint",
      buttonText: {
        button: "\n",
      },
    },
    button: {
      unstyledButton: {
        buttonText: {
          button: "Mint WarTank\u202810,000 $BUSD",
        },
      },
    },
  };
  return (
    <div className="warbots-mint-tank">
      <RightSidebar
        className="right-sidebar-instance-2"
        {...propsData.rightSidebar}
      />
      <LeftSidebar
        className="left-sidebar-instance-1"
        {...propsData.leftSidebar}
      />
      <div className="image-3">
        <div className="flex-container">
          <div className="flex-container-1">
            <span className="dashboard-mint">Dashboard &gt; Mint</span>
            <span className="mint">Mint</span>
          </div>
          <img className="image-2" src={image21} />
        </div>
        <div className="flex-container-2">
          <img className="rectangle-18" src={rectangle18} />
          <img className="rectangle-23" src={rectangle23} />
          <img className="rectangle-24" src={rectangle24} />
        </div>
        <div className="flex-container-3">
          <img className="rectangle-21" src={rectangle21} />
          <img className="rectangle-25" src={rectangle25} />
        </div>
        <Button className="button-instance" {...propsData.button} />
      </div>
    </div>
  );
};
export default App;
