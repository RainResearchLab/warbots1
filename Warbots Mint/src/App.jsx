import * as React from "react";
import "./App.css";
import rectangle21 from "./assets/rectangle21.png";
import iconlyLightPlus from "./assets/iconlyLightPlus.svg";
import iconlyLightSwap1 from "./assets/iconlyLightSwap1.svg";
import iconlyLightMessage from "./assets/iconlyLightMessage.svg";
import line5 from "./assets/line5.svg";
import rectangle25 from "./assets/rectangle25.png";
import iconlyLightHome from "./assets/iconlyLightHome.svg";
import iconlyLightSwap from "./assets/iconlyLightSwap.svg";
import rectangle18 from "./assets/rectangle18.png";
import iconlyLightActivity from "./assets/iconlyLightActivity.svg";
import iconlyLightBag from "./assets/iconlyLightBag.svg";
import rectangle23 from "./assets/rectangle23.png";
import rectangle24 from "./assets/rectangle24.png";
import image21 from "./assets/image21.png";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Button from "./components/Button";
const App = () => {
  const propsData = {
    leftSidebar: {
      iconlyLightSwap1: iconlyLightSwap1,
      buttonText1: {
        button: "\n",
      },
      buttonText: {
        button: "\n",
      },
      button: {
        unstyledButton: {
          buttonText: {
            button: "WARBOTS DOCS",
          },
        },
      },
      iconlyLightBag: iconlyLightBag,
      reports: "Reports",
      button1: {
        unstyledButton: {
          buttonText: {
            button: "CLAIM BUSD",
          },
        },
      },
      assets: "Assets",
      iconlyLightMessage: iconlyLightMessage,
      iconlyLightPlus: iconlyLightPlus,
      iconlyLightHome: iconlyLightHome,
      mint: "Mint",
      iconlyLightActivity: iconlyLightActivity,
      buttonText3: {
        button: "\n",
      },
      home: "Home",
      buttonText2: {
        button: "\n",
      },
    },
    rightSidebar: {
      soldierProfile: "SOLDIER PROFILE",
      rightSidebar: {
        myAssets: "My Assets",
        button1: {
          unstyledButton: {
            buttonText: {
              button: "CONNECT WALLET",
            },
          },
        },
        moreAssets: "More assets...",
        iconlyLightSwap: iconlyLightSwap,
        soldierProfile: "Soldier Profile",
        num1100Busd: "$1100 BUSD",
        june222020: "June 22, 2020",
        warbot102: "WARBOT #102",
        soldierSince: "Soldier Since",
        warbotsValue: "Warbots Value",
        line5: line5,
        num1820Busd: "$1820 BUSD",
        myAccount: "My Account",
        warbot99: "WARBOT #99",
        button: {
          unstyledButton: {
            buttonText: {
              button: "CLAIM BUSD",
            },
          },
        },
        rounrbfyaedyi: "$$$,$$$",
      },
      unstyledButton: {
        buttonText: {
          button: "Connect Wallet",
        },
      },
    },
    button: {
      unstyledButton: {
        buttonText: {
          button: "Mint WarDog\u2028500 $BUSD",
        },
      },
    },
    button1: {
      unstyledButton: {
        buttonText: {
          button: "Mint WarSolider\u20281,000 $BUSD",
        },
      },
    },
    button2: {
      unstyledButton: {
        buttonText: {
          button: "Mint WarHummer\u20285,000 $BUSD",
        },
      },
    },
    button3: {
      unstyledButton: {
        buttonText: {
          button: "Mint WarTank\u202810,000 $BUSD",
        },
      },
    },
    button4: {
      unstyledButton: {
        buttonText: {
          button: "Mint WarHelo\u202825,000 $BUSD",
        },
      },
    },
  };
  return (
    <div className="warbots-mint">
      <LeftSidebar
        className="left-sidebar-instance-1"
        {...propsData.leftSidebar}
      />
      <RightSidebar
        className="right-sidebar-instance-1"
        {...propsData.rightSidebar}
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
          <Button className="button-instance-1" {...propsData.button} />
          <Button className="button-1-instance" {...propsData.button1} />
          <Button className="button-2-instance" {...propsData.button2} />
        </div>
        <div className="flex-container-4">
          <img className="rectangle-21" src={rectangle21} />
          <img className="rectangle-25" src={rectangle25} />
        </div>
        <div className="flex-container-5">
          <Button className="button-3-instance" {...propsData.button3} />
          <Button className="button-4-instance" {...propsData.button4} />
        </div>
      </div>
    </div>
  );
};
export default App;
