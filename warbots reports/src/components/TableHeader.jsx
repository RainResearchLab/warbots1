import * as React from "react";
import "./TableHeader.css";
import TableHeaderText from "./TableHeaderText";
const TableHeader = (props) => {
  return (
    <div className={`table-header ${props.className || ""}`}>
      <TableHeaderText
        className="table-header-text-instance-1"
        {...props.tableHeaderText}
      />
    </div>
  );
};
export default TableHeader;
