import React from "react";
import { useGlobalContext } from "../context";

import { Alert } from "reactstrap";
function SearchAlert() {
  const { alert, setAlert } = useGlobalContext();
  const { msg, type } = alert;

  return (
    <Alert
      color={type}
      toggle={() => setAlert({ isOpen: false, msg: "", type: "" })}
    >
      {msg}
    </Alert>
  );
}

export default SearchAlert;
