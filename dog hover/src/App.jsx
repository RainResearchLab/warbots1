import * as React from "react";
import "./App.scss";
import iconlyLightMessage from "./assets/iconlyLightMessage.svg";
import iconlyLightSwap from "./assets/iconlyLightSwap.svg";
import iconlyLightBag from "./assets/iconlyLightBag.svg";
import iconlyLightSwap1 from "./assets/iconlyLightSwap1.svg";
import group32 from "./assets/group32.svg";
import rectangle21 from "./assets/rectangle21.png";
import line5 from "./assets/line5.svg";
import iconlyLightPlus from "./assets/iconlyLightPlus.svg";
import rectangle24 from "./assets/rectangle24.png";
import rectangle25 from "./assets/rectangle25.png";
import rectangle23 from "./assets/rectangle23.png";
import image21 from "./assets/image21.png";
import iconlyLightActivity from "./assets/iconlyLightActivity.svg";
import iconlyLightHome from "./assets/iconlyLightHome.svg";
import LeftSidebar from "./components/LeftSidebar";
import Button from "./components/Button";
import RightSidebar from "./components/RightSidebar";
const App = () => {
  const propsData = {
    rightSidebar: {
      rightSidebar: {
        stxswjbcsvegr: "$$$,$$$",
        myAccount: "My Account",
        button: {
          unstyledButton: {
            buttonText: {
              button: "CONNECT WALLET",
            },
          },
        },
        june222020: "June 22, 2020",
        soldierProfile: "Soldier Profile",
        num1820Busd: "$1820 BUSD",
        warbot102: "WARBOT #102",
        iconlyLightSwap1: iconlyLightSwap1,
        warbotsValue: "Warbots Value",
        myAssets: "My Assets",
        num1100Busd: "$1100 BUSD",
        moreAssets: "More assets...",
        button1: {
          unstyledButton: {
            buttonText: {
              button: "CLAIM BUSD",
            },
          },
        },
        soldierSince: "Soldier Since",
        warbot99: "WARBOT #99",
        line5: line5,
      },
      soldierProfile: "SOLDIER PROFILE",
      unstyledButton: {
        buttonText: {
          button: "Connect Wallet",
        },
      },
    },
    leftSidebar: {
      buttonText2: {
        button: "\n",
      },
      iconlyLightHome: iconlyLightHome,
      mint: "Mint",
      iconlyLightActivity: iconlyLightActivity,
      iconlyLightSwap: iconlyLightSwap,
      button: {
        unstyledButton: {
          buttonText: {
            button: "WARBOTS DOCS",
          },
        },
      },
      iconlyLightMessage: iconlyLightMessage,
      buttonText1: {
        button: "\n",
      },
      button1: {
        unstyledButton: {
          buttonText: {
            button: "CLAIM BUSD",
          },
        },
      },
      home: "Home",
      iconlyLightBag: iconlyLightBag,
      buttonText: {
        button: "\n",
      },
      iconlyLightPlus: iconlyLightPlus,
      assets: "Assets",
      buttonText3: {
        button: "\n",
      },
      reports: "Reports",
    },
    button: {
      unstyledButton: {
        buttonText: {
          button: "Mint WarDog\u2028500 $BUSD",
        },
      },
    },
  };
  return (
    <div className="war-bot-mint-dog-hov">
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
          <img className="group-32" src={group32} />
          <img className="rectangle-23" src={rectangle23} />
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
