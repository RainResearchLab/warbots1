import * as React from "react";
import "./App.css";
import iconlyLightHome from "./assets/iconlyLightHome.svg";
import iconlyLightPlus from "./assets/iconlyLightPlus.svg";
import iconlyLightBag from "./assets/iconlyLightBag.svg";
import group3 from "./assets/group3.svg";
import iconlyLightSwap1 from "./assets/iconlyLightSwap1.svg";
import iconlyLightMessage from "./assets/iconlyLightMessage.svg";
import frame1 from "./assets/frame1.svg";
import image21 from "./assets/image21.png";
import iconlyLightSwap from "./assets/iconlyLightSwap.svg";
import iconlyLightActivity from "./assets/iconlyLightActivity.svg";
import line5 from "./assets/line5.svg";
import group31 from "./assets/group31.svg";
import iconlyLightPlus1 from "./assets/iconlyLightPlus1.svg";
import chart2 from "./assets/chart2.svg";
import chart from "./assets/chart.svg";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
const App = () => {
  const propsData = {
    leftSidebar: {
      button: {
        unstyledButton: {
          buttonText: {
            button: "CLAIM BUSD",
          },
        },
      },
      mint: "Mint",
      iconlyLightHome: iconlyLightHome,
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
      iconlyLightPlus1: iconlyLightPlus1,
      reports: "Reports",
      iconlyLightMessage: iconlyLightMessage,
      buttonText1: {
        button: "\n",
      },
      assets: "Assets",
      home: "Home",
      buttonText3: {
        button: "\n",
      },
      buttonText2: {
        button: "\n",
      },
      iconlyLightSwap: iconlyLightSwap,
      iconlyLightBag: iconlyLightBag,
      iconlyLightActivity: iconlyLightActivity,
    },
    rightSidebar: {
      unstyledButton: {
        buttonText: {
          button: "Connect Wallet",
        },
      },
      soldierProfile: "SOLDIER PROFILE",
      rightSidebar: {
        myAssets: "My Assets",
        button: {
          unstyledButton: {
            buttonText: {
              button: "CONNECT WALLET",
            },
          },
        },
        soldierProfile: "Soldier Profile",
        moreAssets: "More assets...",
        warbot102: "WARBOT #102",
        june222020: "June 22, 2020",
        iconlyLightSwap1: iconlyLightSwap1,
        soldierSince: "Soldier Since",
        warbot99: "WARBOT #99",
        myAccount: "My Account",
        exsenonfuydnl: "$$$,$$$",
        num1820Busd: "$1820 BUSD",
        num1100Busd: "$1100 BUSD",
        button1: {
          unstyledButton: {
            buttonText: {
              button: "CLAIM BUSD",
            },
          },
        },
        line5: line5,
        warbotsValue: "Warbots Value",
      },
    },
  };
  return (
    <div className="warbots-home">
      <LeftSidebar
        className="left-sidebar-instance-1"
        {...propsData.leftSidebar}
      />
      <div className="image-3">
        <span className="dashboard-home">Dashboard &gt; Home</span>
        <span className="home">Home</span>
        <div className="flex-container">
          <div className="flex-container-1">
            <div className="cat-absolute-container">WarSolider #1</div>
            <span>WarSolider #1</span>
          </div>
          <span className="war-hummer-1">WarHummer #1</span>
        </div>
        <div className="flex-container-2">
          <div className="rectangle-6">
            <div className="image-3-1">
              <div className="rectangle-6-1">
                <div className="image-3-2">
                  <div className="flex-container-3">
                    <div className="flex-container-4">
                      <span>$</span>
                      <span className="num-1820">1,820</span>
                    </div>
                    <img className="chart-2" src={chart2} />
                  </div>
                  <span className="profit-last-7-days">
                    Profit Last 30 Days
                  </span>
                  <span className="num-187">+ 1,87%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-6-2">
            <div className="image-3-3">
              <div className="flex-container-5">
                <div className="flex-container-6">
                  <span>$</span>
                  <span className="num-5100">5,100</span>
                </div>
                <img className="chart" src={chart} />
              </div>
              <span className="profit-last-7-days-1">Profit Last 30 Days</span>
              <span className="num-187-1">+ 1,87%</span>
            </div>
          </div>
          <div className="rectangle-10">
            <img className="iconly-light-plus" src={iconlyLightPlus} />
            <span className="new-war-bot">New WarBot</span>
          </div>
        </div>
        <span className="activity">ACTIVITY</span>
        <div className="flex-container-7">
          <span>Transactions</span>
          <span className="amount">Amount</span>
          <span className="status">Status</span>
          <span className="total">Total</span>
        </div>
        <hr className="line-4" />
        <div className="flex-container-8">
          <img className="frame-1" src={frame1} />
          <span className="warbot-purchased">WARBOT PURCHASED</span>
          <span className="num-1-warbot">1 WARBOT</span>
          <span className="pending">Pending</span>
          <span className="num-1000-busd">1,000 BUSD</span>
          <span className="december-19-th-2022">December 19th, 2022</span>
        </div>
        <div className="flex-container-9">
          <img className="group-3" src={group3} />
          <span className="warbot-purchased-1">WARBOT PURCHASED</span>
          <span className="num-1-warbot-1">1 WARBOT</span>
          <span className="done">Done</span>
          <span className="num-1000-busd-1">1,000 BUSD</span>
          <span className="december-13-th-2022">December 13th, 2022</span>
        </div>
        <div className="flex-container-10">
          <img className="group-3-1" src={group31} />
          <span className="warbot-purchased-2">WARBOT PURCHASED</span>
          <span className="num-1-warbot-2">1 WARBOT</span>
          <span className="done-1">Done</span>
          <span className="num-1000-busd-2">1,000 BUSD</span>
          <span className="december-10-th-2022">December 10th, 2022</span>
        </div>
      </div>
      <img className="image-2" src={image21} />
      <RightSidebar
        className="right-sidebar-instance-1"
        {...propsData.rightSidebar}
      />
    </div>
  );
};
export default App;
