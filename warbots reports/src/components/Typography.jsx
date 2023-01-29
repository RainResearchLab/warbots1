import * as React from "react";
import "./Typography.css";
const Typography = (props) => {
  return (
    <div className={`typography ${props.className || ""}`}>
      <span className="table-cell">{props.tableCell || "WarDog #1"}</span>
    </div>
  );
};
export default Typography;
