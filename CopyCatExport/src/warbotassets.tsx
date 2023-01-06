import * as React from "react";
import "./warbotsassets.css";
import iconlyLightBag from "./assets/iconlyLightBag.svg";
import iconlyLightPlus from "./assets/iconlyLightPlus.svg";
import iconlyLightActivity from "./assets/iconlyLightActivity.svg";
import iconlyLightHome from "./assets/iconlyLightHome.svg";
import rectangle18 from "./assets/rectangle18.png";
import rectangle24 from "./assets/rectangle24.png";
import line5 from "./assets/line5.svg";
import iconlyLightMessage from "./assets/iconlyLightMessage.svg";
import iconlyLightSwap from "./assets/iconlyLightSwap.svg";
import iconlyLightSwap1 from "./assets/iconlyLightSwap1.svg";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Button from "./components/Button";
const App = () => {
  const propsData = {
    leftSidebar: {
      buttonText2: {
        button: "\n",
      },
      assets: "Assets",
      iconlyLightPlus: iconlyLightPlus,
      buttonText1: {
        button: "\n",
      },
      buttonText: {
        button: "\n",
      },
      iconlyLightBag: iconlyLightBag,
      button1: {
        unstyledButton: {
          buttonText: {
            button: "WARBOTS DOCS",
          },
        },
      },
      buttonText3: {
        button: "\n",
      },
      iconlyLightActivity: iconlyLightActivity,
      iconlyLightMessage: iconlyLightMessage,
      reports: "Reports",
      iconlyLightSwap: iconlyLightSwap,
      mint: "Mint",
      button: {
        unstyledButton: {
          buttonText: {
            button: "CLAIM BUSD",
          },
        },
      },
      home: "Home",
      iconlyLightHome: iconlyLightHome,
    },
    button: {
      unstyledButton: {
        buttonText: {
          button: "WarDog\u2028NFT #1",
        },
      },
    },
    button1: {
      unstyledButton: {
        buttonText: {
          button: "WarHummer\u2028NFT #1",
        },
      },
    },
    rightSidebar: {
      rightSidebar: {
        soldierProfile: "Soldier Profile",
        line5: line5,
        button: {
          unstyledButton: {
            buttonText: {
              button: "CLAIM BUSD",
            },
          },
        },
        num1100Busd: "$1100 BUSD",
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
        warbot99: "WARBOT #99",
        warbotsValue: "Warbots Value",
        warbot102: "WARBOT #102",
        myAccount: "My Account",
        moreAssets: "More assets...",
        soldierSince: "Soldier Since",
        ixcguwcpqhzeo: "$$$,$$$",
        num1820Busd: "$1820 BUSD",
      },
    },
  };
  return (
    <div className="warbots-assets">
      <LeftSidebar
        className="left-sidebar-instance-1"
        {...propsData.leftSidebar}
      />
      <div className="flex-container">
        <span className="dashboard-assets">Dashboard &gt; Assets</span>
        <span className="assets">Assets</span>
        <img className="rectangle-18" src={rectangle18} />
        <Button className="button-instance-3" {...propsData.button} />
      </div>
      <div className="flex-container-1">
        <img className="rectangle-24" src={rectangle24} />
        <Button className="button-1-instance" {...propsData.button1} />
      </div>
      <RightSidebar
        className="right-sidebar-instance-2"
        {...propsData.rightSidebar}
      />
    </div>
  );
};
export default App;
