import * as React from "react";
import "./TableFooter.css";
import navigation from "../assets/navigation.svg";
import fillednavigationarro from "../assets/fillednavigationarro.svg";
const TableFooter = (props) => {
  return (
    <div className={`table-footer ${props.className || ""}`}>
      <span className="rows-per-page">
        {props.rowsPerPage || "Rows per page:"}
      </span>
      <span className="num-10">{props.num10 || "10"}</span>
      <img
        className="fillednavigationarro"
        src={props.fillednavigationarro || fillednavigationarro}
      />
      <span className="num-1-10-of-100">
        {props.num110Of100 || "1-5 of 13"}
      </span>
      <img className="navigation" src={props.navigation || navigation} />
    </div>
  );
};
export default TableFooter;
