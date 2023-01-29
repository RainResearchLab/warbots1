import * as React from "react";
import "./App.css";
import rectangle18 from "./assets/rectangle18.png";
import iconlyLightActivity from "./assets/iconlyLightActivity.svg";
import rectangle25 from "./assets/rectangle25.png";
import line5 from "./assets/line5.svg";
import iconlyLightSwap1 from "./assets/iconlyLightSwap1.svg";
import iconlyLightHome from "./assets/iconlyLightHome.svg";
import iconlyLightPlus from "./assets/iconlyLightPlus.svg";
import iconlyLightMessage from "./assets/iconlyLightMessage.svg";
import iconlyLightBag from "./assets/iconlyLightBag.svg";
import image21 from "./assets/image21.png";
import rectangle23 from "./assets/rectangle23.png";
import rectangle24 from "./assets/rectangle24.png";
import rectangle21 from "./assets/rectangle21.png";
import iconlyLightSwap from "./assets/iconlyLightSwap.svg";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Button from "./components/Button";
const App = () => {
  const propsData = {
    rightSidebar: {
      soldierProfile: "SOLDIER PROFILE",
      rightSidebar: {
        warbot99: "WARBOT #99",
        qojdiskantijg: "$$$,$$$",
        line5: line5,
        iconlyLightSwap1: iconlyLightSwap1,
        june222020: "June 22, 2020",
        num1820Busd: "$1820 BUSD",
        myAccount: "My Account",
        soldierSince: "Soldier Since",
        warbotsValue: "Warbots Value",
        warbot102: "WARBOT #102",
        myAssets: "My Assets",
        num1100Busd: "$1100 BUSD",
        button1: {
          unstyledButton: {
            buttonText: {
              button: "CLAIM BUSD",
            },
          },
        },
        soldierProfile: "Soldier Profile",
        moreAssets: "More assets...",
        button: {
          unstyledButton: {
            buttonText: {
              button: "CONNECT WALLET",
            },
          },
        },
      },
      unstyledButton: {
        buttonText: {
          button: "Connect Wallet",
        },
      },
    },
    leftSidebar: {
      iconlyLightPlus: iconlyLightPlus,
      buttonText2: {
        button: "\n",
      },
      iconlyLightActivity: iconlyLightActivity,
      home: "Home",
      button1: {
        unstyledButton: {
          buttonText: {
            button: "CLAIM BUSD",
          },
        },
      },
      iconlyLightSwap: iconlyLightSwap,
      buttonText: {
        button: "\n",
      },
      reports: "Reports",
      buttonText3: {
        button: "\n",
      },
      buttonText1: {
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
      iconlyLightMessage: iconlyLightMessage,
      iconlyLightHome: iconlyLightHome,
      mint: "Mint",
      iconlyLightBag: iconlyLightBag,
    },
    button: {
      unstyledButton: {
        buttonText: {
          button: "Mint WarHelo\u202825,000 $BUSD",
        },
      },
    },
  };
  return (
    <div className="warbots-mint-helo">
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
