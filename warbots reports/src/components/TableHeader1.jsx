import * as React from "react";
import "./TableHeader1.css";
import mastertableelementss from "../assets/mastertableelementss.svg";
import TableHeaderText from "./TableHeaderText";
const TableHeader1 = (props) => {
  return (
    <div className={`table-header-1 ${props.className || ""}`}>
      <img
        className="mastertableelementss"
        src={props.mastertableelementss || mastertableelementss}
      />
      <TableHeaderText
        className="table-header-text-instance-2"
        {...props.tableHeaderText}
      />
    </div>
  );
};
export default TableHeader1;
