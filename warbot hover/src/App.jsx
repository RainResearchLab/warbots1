import * as React from "react";
import "./App.css";
import image21 from "./assets/image21.png";
import rectangle21 from "./assets/rectangle21.png";
import iconlyLightSwap from "./assets/iconlyLightSwap.svg";
import line5 from "./assets/line5.svg";
import iconlyLightBag from "./assets/iconlyLightBag.svg";
import group33 from "./assets/group33.svg";
import rectangle24 from "./assets/rectangle24.png";
import rectangle25 from "./assets/rectangle25.png";
import iconlyLightActivity from "./assets/iconlyLightActivity.svg";
import rectangle18 from "./assets/rectangle18.png";
import iconlyLightMessage from "./assets/iconlyLightMessage.svg";
import iconlyLightSwap1 from "./assets/iconlyLightSwap1.svg";
import iconlyLightPlus from "./assets/iconlyLightPlus.svg";
import iconlyLightHome from "./assets/iconlyLightHome.svg";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Button from "./components/Button";
const App = () => {
  const propsData = {
    rightSidebar: {
      rightSidebar: {
        line5: line5,
        soldierProfile: "Soldier Profile",
        warbotsValue: "Warbots Value",
        num1100Busd: "$1100 BUSD",
        iconlyLightSwap1: iconlyLightSwap1,
        cfzzxtxdowytn: "$$$,$$$",
        warbot99: "WARBOT #99",
        button: {
          unstyledButton: {
            buttonText: {
              button: "CONNECT WALLET",
            },
          },
        },
        moreAssets: "More assets...",
        myAssets: "My Assets",
        june222020: "June 22, 2020",
        soldierSince: "Soldier Since",
        num1820Busd: "$1820 BUSD",
        myAccount: "My Account",
        warbot102: "WARBOT #102",
        button1: {
          unstyledButton: {
            buttonText: {
              button: "CLAIM BUSD",
            },
          },
        },
      },
      soldierProfile: "SOLDIER PROFILE",
      unstyledButton: {
        buttonText: {
          button: "Connect Wallet",
        },
      },
    },
    leftSidebar: {
      home: "Home",
      assets: "Assets",
      mint: "Mint",
      reports: "Reports",
      iconlyLightMessage: iconlyLightMessage,
      buttonText2: {
        button: "\n",
      },
      iconlyLightSwap: iconlyLightSwap,
      iconlyLightBag: iconlyLightBag,
      iconlyLightPlus: iconlyLightPlus,
      button: {
        unstyledButton: {
          buttonText: {
            button: "CLAIM BUSD",
          },
        },
      },
      buttonText3: {
        button: "\n",
      },
      button1: {
        unstyledButton: {
          buttonText: {
            button: "WARBOTS DOCS",
          },
        },
      },
      buttonText: {
        button: "\n",
      },
      iconlyLightActivity: iconlyLightActivity,
      iconlyLightHome: iconlyLightHome,
      buttonText1: {
        button: "\n",
      },
    },
    button: {
      unstyledButton: {
        buttonText: {
          button: "Mint WarSolider\u20281,000 $BUSD",
        },
      },
    },
  };
  return (
    <div className="warbots-mint-warbo">
      <RightSidebar
        className="right-sidebar-instance-1"
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
          <img className="group-33" src={group33} />
          <img className="rectangle-24" src={rectangle24} />
        </div>
        <Button className="button-instance" {...propsData.button} />
        <div className="flex-container-3">
          <img className="rectangle-21" src={rectangle21} />
          <img className="rectangle-25" src={rectangle25} />
        </div>
      </div>
    </div>
  );
};
export default App;
