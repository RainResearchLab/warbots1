import * as React from "react";
import "./App.css";
import navigation from "./assets/navigation.svg";
import mastertableelementss from "./assets/mastertableelementss.svg";
import iconlyLightPlus from "./assets/iconlyLightPlus.svg";
import line5 from "./assets/line5.svg";
import iconlyLightHome from "./assets/iconlyLightHome.svg";
import iconlyLightMessage from "./assets/iconlyLightMessage.svg";
import iconlyLightSwap1 from "./assets/iconlyLightSwap1.svg";
import iconlyLightSwap from "./assets/iconlyLightSwap.svg";
import fillednavigationarro from "./assets/fillednavigationarro.svg";
import dividerHorizontal from "./assets/dividerHorizontal.svg";
import image21 from "./assets/image21.png";
import iconlyLightActivity from "./assets/iconlyLightActivity.svg";
import iconlyLightBag from "./assets/iconlyLightBag.svg";
import TableHeader from "./components/TableHeader";
import LeftSidebar from "./components/LeftSidebar";
import TableHeader1 from "./components/TableHeader1";
import TableCell from "./components/TableCell";
import TableFooter from "./components/TableFooter";
import RightSidebar from "./components/RightSidebar";
const App = () => {
  const propsData = {
    leftSidebar: {
      home: "Home",
      assets: "Assets",
      iconlyLightHome: iconlyLightHome,
      iconlyLightMessage: iconlyLightMessage,
      iconlyLightBag: iconlyLightBag,
      iconlyLightPlus: iconlyLightPlus,
      reports: "Reports",
      buttonText3: {
        button: "\n",
      },
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
      button: {
        unstyledButton: {
          buttonText: {
            button: "CLAIM BUSD",
          },
        },
      },
      mint: "Mint",
      buttonText2: {
        button: "\n",
      },
      iconlyLightSwap: iconlyLightSwap,
      buttonText: {
        button: "\n",
      },
    },
    tableHeader: {
      tableHeaderText: {
        tableHeader: "Warbot",
      },
    },
    tableHeader1: {
      tableHeaderText: {
        tableHeader: "BUSD Claimed To date",
      },
    },
    tableHeader2: {
      tableHeaderText: {
        tableHeader: "last claim Date",
      },
      mastertableelementss: mastertableelementss,
    },
    tableHeader3: {
      tableHeaderText: {
        tableHeader: "current month",
      },
    },
    tableCell: {
      typography: {
        tableCell: "WarDog #1",
      },
    },
    tableCell1: {
      typography: {
        tableCell: "820 BUSD",
      },
    },
    tableCell2: {
      typography: {
        tableCell: "5 days ago",
      },
    },
    tableCell3: {
      typography: {
        tableCell: "+ 2.04%",
      },
    },
    tableCell4: {
      typography: {
        tableCell: "WarHummer #1",
      },
    },
    tableCell5: {
      typography: {
        tableCell: "100 BUSD",
      },
    },
    tableCell6: {
      typography: {
        tableCell: "5 days ago",
      },
    },
    tableCell7: {
      typography: {
        tableCell: "+ 2.04%",
      },
    },
    tableCell8: {
      typography: {
        tableCell: "",
      },
    },
    tableCell9: {
      typography: {
        tableCell: "",
      },
    },
    tableCell10: {
      typography: {
        tableCell: "",
      },
    },
    tableCell11: {
      typography: {
        tableCell: "",
      },
    },
    tableCell12: {
      typography: {
        tableCell: "",
      },
    },
    tableCell13: {
      typography: {
        tableCell: "",
      },
    },
    tableCell14: {
      typography: {
        tableCell: "",
      },
    },
    tableCell15: {
      typography: {
        tableCell: "",
      },
    },
    tableCell16: {
      typography: {
        tableCell: "",
      },
    },
    tableCell17: {
      typography: {
        tableCell: "",
      },
    },
    tableCell18: {
      typography: {
        tableCell: "",
      },
    },
    tableCell19: {
      typography: {
        tableCell: "",
      },
    },
    tableCell20: {
      typography: {
        tableCell: "",
      },
    },
    tableCell21: {
      typography: {
        tableCell: "",
      },
    },
    tableCell22: {
      typography: {
        tableCell: "",
      },
    },
    tableCell23: {
      typography: {
        tableCell: "",
      },
    },
    tableFooter: {
      rowsPerPage: "Rows per page:",
      num10: "10",
      num110Of100: "1-5 of 13",
      navigation: navigation,
      fillednavigationarro: fillednavigationarro,
    },
    rightSidebar: {
      soldierProfile: "SOLDIER PROFILE",
      rightSidebar: {
        button1: {
          unstyledButton: {
            buttonText: {
              button: "CONNECT WALLET",
            },
          },
        },
        soldierSince: "Soldier Since",
        warbot99: "WARBOT #99",
        moreAssets: "More assets...",
        myAccount: "My Account",
        num1100Busd: "$1100 BUSD",
        june222020: "June 22, 2020",
        button: {
          unstyledButton: {
            buttonText: {
              button: "CLAIM BUSD",
            },
          },
        },
        soldierProfile: "Soldier Profile",
        num1820Busd: "$1820 BUSD",
        zfdfislbtndgg: "$$$,$$$",
        myAssets: "My Assets",
        iconlyLightSwap1: iconlyLightSwap1,
        warbot102: "WARBOT #102",
        warbotsValue: "Warbots Value",
        line5: line5,
      },
      unstyledButton: {
        buttonText: {
          button: "Connect Wallet",
        },
      },
    },
  };
  return (
    <div className="warbots-reports">
      <LeftSidebar
        className="left-sidebar-instance-1"
        {...propsData.leftSidebar}
      />
      <div className="image-3">
        <div className="flex-container">
          <div className="flex-container-1">
            <span className="dashboard-reports">Dashboard &gt; Reports</span>
            <span className="reports">Reports</span>
          </div>
          <img className="image-2" src={image21} />
        </div>
        <div className="card">
          <div className="tr">
            <TableHeader
              className="table-header-instance-1"
              {...propsData.tableHeader}
            />
            <TableHeader
              className="table-header-1-instance"
              {...propsData.tableHeader1}
            />
            <TableHeader1
              className="table-header-2-instance-1"
              {...propsData.tableHeader2}
            />
            <TableHeader
              className="table-header-3-instance"
              {...propsData.tableHeader3}
            />
          </div>
          <div className="flex-container-2">
            <TableCell
              className="table-cell-instance-1"
              {...propsData.tableCell}
            />
            <TableCell
              className="table-cell-1-instance"
              {...propsData.tableCell1}
            />
            <TableCell
              className="table-cell-2-instance"
              {...propsData.tableCell2}
            />
            <TableCell
              className="table-cell-3-instance"
              {...propsData.tableCell3}
            />
          </div>
          <img className="divider-horizontal" src={dividerHorizontal} />
          <div className="flex-container-3">
            <TableCell
              className="table-cell-4-instance"
              {...propsData.tableCell4}
            />
            <TableCell
              className="table-cell-5-instance"
              {...propsData.tableCell5}
            />
            <TableCell
              className="table-cell-6-instance"
              {...propsData.tableCell6}
            />
            <TableCell
              className="table-cell-7-instance"
              {...propsData.tableCell7}
            />
          </div>
          <img className="divider-horizontal-1" src={dividerHorizontal} />
          <div className="flex-container-4">
            <TableCell
              className="table-cell-8-instance"
              {...propsData.tableCell8}
            />
            <TableCell
              className="table-cell-9-instance"
              {...propsData.tableCell9}
            />
            <TableCell
              className="table-cell-10-instance"
              {...propsData.tableCell10}
            />
            <TableCell
              className="table-cell-11-instance"
              {...propsData.tableCell11}
            />
          </div>
          <img className="divider-horizontal-2" src={dividerHorizontal} />
          <div className="flex-container-5">
            <TableCell
              className="table-cell-12-instance"
              {...propsData.tableCell12}
            />
            <TableCell
              className="table-cell-13-instance"
              {...propsData.tableCell13}
            />
            <TableCell
              className="table-cell-14-instance"
              {...propsData.tableCell14}
            />
            <TableCell
              className="table-cell-15-instance"
              {...propsData.tableCell15}
            />
          </div>
          <img className="divider-horizontal-3" src={dividerHorizontal} />
          <div className="flex-container-6">
            <TableCell
              className="table-cell-16-instance"
              {...propsData.tableCell16}
            />
            <TableCell
              className="table-cell-17-instance"
              {...propsData.tableCell17}
            />
            <TableCell
              className="table-cell-18-instance"
              {...propsData.tableCell18}
            />
            <TableCell
              className="table-cell-19-instance"
              {...propsData.tableCell19}
            />
          </div>
          <img className="divider-horizontal-4" src={dividerHorizontal} />
          <div className="flex-container-7">
            <TableCell
              className="table-cell-20-instance"
              {...propsData.tableCell20}
            />
            <TableCell
              className="table-cell-21-instance"
              {...propsData.tableCell21}
            />
            <TableCell
              className="table-cell-22-instance"
              {...propsData.tableCell22}
            />
            <TableCell
              className="table-cell-23-instance"
              {...propsData.tableCell23}
            />
          </div>
          <img className="divider-horizontal-5" src={dividerHorizontal} />
          <TableFooter
            className="table-footer-instance-1"
            {...propsData.tableFooter}
          />
        </div>
      </div>
      <RightSidebar
        className="right-sidebar-instance-1"
        {...propsData.rightSidebar}
      />
    </div>
  );
};
export default App;
