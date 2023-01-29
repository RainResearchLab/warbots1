import * as React from "react";
import "./TableCell.css";
import Typography from "./Typography";
const TableCell = (props) => {
  return (
    <div className={`table-cell-1 ${props.className || ""}`}>
      <Typography className="typography-instance-1" {...props.typography} />
    </div>
  );
};
export default TableCell;
