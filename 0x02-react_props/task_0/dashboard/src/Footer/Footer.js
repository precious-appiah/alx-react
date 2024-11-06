import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils";

export default function Footer() {
  const date = getFullYear();
  const name = getFooterCopy(false);
  return (
    <div className="App-footer">
      <p>
        {date} - {name}
      </p>
    </div>
  );
}
