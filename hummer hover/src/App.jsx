import * as React from "react";
import "./App.css";
import iconlyLightActivity from "./assets/iconlyLightActivity.svg";
import iconlyLightSwap from "./assets/iconlyLightSwap.svg";
import image21 from "./assets/image21.png";
import iconlyLightMessage from "./assets/iconlyLightMessage.svg";
import iconlyLightHome from "./assets/iconlyLightHome.svg";
import rectangle18 from "./assets/rectangle18.png";
import rectangle21 from "./assets/rectangle21.png";
import rectangle25 from "./assets/rectangle25.png";
import iconlyLightBag from "./assets/iconlyLightBag.svg";
import line5 from "./assets/line5.svg";
import rectangle23 from "./assets/rectangle23.png";
import group34 from "./assets/group34.svg";
import iconlyLightPlus from "./assets/iconlyLightPlus.svg";
import iconlyLightSwap1 from "./assets/iconlyLightSwap1.svg";
import LeftSidebar from "./components/LeftSidebar";
import Button from "./components/Button";
import RightSidebar from "./components/RightSidebar";
const App = () => {
  const propsData = {
    rightSidebar: {
      unstyledButton: {
        buttonText: {
          button: "Connect Wallet",
        },
      },
      soldierProfile: "SOLDIER PROFILE",
      rightSidebar: {
        num1100Busd: "$1100 BUSD",
        soldierSince: "Soldier Since",
        button: {
          unstyledButton: {
            buttonText: {
              button: "CLAIM BUSD",
            },
          },
        },
        button1: {
          unstyledButton: {
            buttonText: {
              button: "CONNECT WALLET",
            },
          },
        },
        warbot99: "WARBOT #99",
        soldierProfile: "Soldier Profile",
        myAccount: "My Account",
        ggdhoxtsatsyc: "$$$,$$$",
        warbotsValue: "Warbots Value",
        myAssets: "My Assets",
        line5: line5,
        june222020: "June 22, 2020",
        moreAssets: "More assets...",
        warbot102: "WARBOT #102",
        iconlyLightSwap1: iconlyLightSwap1,
        num1820Busd: "$1820 BUSD",
      },
    },
    leftSidebar: {
      buttonText: {
        button: "\n",
      },
      buttonText3: {
        button: "\n",
      },
      button1: {
        unstyledButton: {
          buttonText: {
            button: "CLAIM BUSD",
          },
        },
      },
      reports: "Reports",
      iconlyLightActivity: iconlyLightActivity,
      home: "Home",
      iconlyLightPlus: iconlyLightPlus,
      iconlyLightBag: iconlyLightBag,
      assets: "Assets",
      iconlyLightHome: iconlyLightHome,
      button: {
        unstyledButton: {
          buttonText: {
            button: "WARBOTS DOCS",
          },
        },
      },
      buttonText2: {
        button: "\n",
      },
      iconlyLightSwap: iconlyLightSwap,
      mint: "Mint",
      buttonText1: {
        button: "\n",
      },
      iconlyLightMessage: iconlyLightMessage,
    },
    button: {
      unstyledButton: {
        buttonText: {
          button: "Mint WarHummer\u20285,000 $BUSD",
        },
      },
    },
  };
  return (
    <div className="warbots-mint-humme">
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
          <img className="rectangle-23" src={rectangle23} />
          <img className="group-34" src={group34} />
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
