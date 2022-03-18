import React from "react";
import { useGlobalContext } from "../context";
import { UncontrolledAlert } from "reactstrap";
function SearchAlert() {
  const { alert } = useGlobalContext();
  const { msg, type } = alert;

  return <UncontrolledAlert color={type}>{msg}</UncontrolledAlert>;
}

export default SearchAlert;
