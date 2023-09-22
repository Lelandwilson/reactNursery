import React, { } from "react";
import classes from "./SaleItem.module.css";

export default function SaleItem(props) {
  return (
    <div className = {classes.container} style={{transform: `scale(${props.scale})`}}>
      <p className={classes.overlayText}>-{props.text}%</p>
      <img className={classes.saleIcon}  src="/images/icon_saleStraight.png" />
    </div>
  );
}
