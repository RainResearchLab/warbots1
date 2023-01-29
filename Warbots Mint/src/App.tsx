import * as React from "react";
import "./App.css";
import rectangle18 from "./assets/rectangle18.png";
import iconlyLightPlus from "./assets/iconlyLightPlus.svg";
import iconlyLightBag from "./assets/iconlyLightBag.svg";
import iconlyLightActivity from "./assets/iconlyLightActivity.svg";
import rectangle24 from "./assets/rectangle24.png";
import iconlyLightSwap from "./assets/iconlyLightSwap.svg";
import image21 from "./assets/image21.png";
import rectangle21 from "./assets/rectangle21.png";
import rectangle23 from "./assets/rectangle23.png";
import line5 from "./assets/line5.svg";
import iconlyLightHome from "./assets/iconlyLightHome.svg";
import rectangle25 from "./assets/rectangle25.png";
import iconlyLightSwap1 from "./assets/iconlyLightSwap1.svg";
import iconlyLightMessage from "./assets/iconlyLightMessage.svg";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Button from "./components/Button";
const App = () => {
  const propsData = {
    leftSidebar: {
      reports: "Reports",
      iconlyLightSwap1: iconlyLightSwap1,
      buttonText1: {
        button: "\n",
      },
      button1: {
        unstyledButton: {
          buttonText: {
            button: "WARBOTS DOCS",
          },
        },
      },
      iconlyLightActivity: iconlyLightActivity,
      buttonText2: {
        button: "\n",
      },
      assets: "Assets",
      button: {
        unstyledButton: {
          buttonText: {
            button: "CLAIM BUSD",
          },
        },
      },
      home: "Home",
      iconlyLightPlus: iconlyLightPlus,
      mint: "Mint",
      buttonText3: {
        button: "\n",
      },
      buttonText: {
        button: "\n",
      },
      iconlyLightHome: iconlyLightHome,
      iconlyLightMessage: iconlyLightMessage,
      iconlyLightBag: iconlyLightBag,
    },
    rightSidebar: {
      rightSidebar: {
        warbotsValue: "Warbots Value",
        soldierProfile: "Soldier Profile",
        warbot102: "WARBOT #102",
        myAssets: "My Assets",
        myAccount: "My Account",
        line5: line5,
        iconlyLightSwap: iconlyLightSwap,
        num1100Busd: "$1100 BUSD",
        soldierSince: "Soldier Since",
        num1820Busd: "$1820 BUSD",
        warbot99: "WARBOT #99",
        moreAssets: "More assets...",
        june222020: "June 22, 2020",
        button: {
          unstyledButton: {
            buttonText: {
              button: "CONNECT WALLET",
            },
          },
        },
        button1: {
          unstyledButton: {
            buttonText: {
              button: "CLAIM BUSD",
            },
          },
        },
        ifkukmqarylfq: "$$$,$$$",
      },
      unstyledButton: {
        buttonText: {
          button: "Connect Wallet",
        },
      },
      soldierProfile: "SOLDIER PROFILE",
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
          <Button className="button-instance-3" {...propsData.button} />
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
