import * as React from "react";
import "./TableHeaderText.css";
const TableHeaderText = (props) => {
  return (
    <div className={`table-header-text ${props.className || ""}`}>
      <span className="table-header-1">{props.tableHeader || "Warbot"}</span>
    </div>
  );
};
export default TableHeaderText;
