import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "./UI/Card";
import ProductItemForm from "./Cart/ProductItemForm";
import SaleItem from "../components/SaleItem";
import CartContext from "../store/cart-context.jsx";

import classes from "./SingleProductListing.module.css";

export default function SingleProductListing(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.Product.id,
      name: props.Product.name,
      amount: amount,
      price: props.Product.price,
    });
  };

  return (
    <Card>

      <div className={classes["grid-container"]}>

        <div className={classes.section}>
          <h5>{props.Product.name}: </h5>
          {props.Product.new ? (
            <img className={classes.iconNewItem} src="../images/icon_new.png" />
          ) : (
            <div></div>
          )}
          <p>{props.Product.commonName}</p>

          {props.Product.discountPercent > 0 ? (
            <div className={classes.discountSection}>
              <p>
                <span className={classes.strikeText}>
                  ${props.Product.price}
                </span>
                &nbsp;&nbsp;&nbsp;$
                {(
                  props.Product.price -
                  props.Product.price * (props.Product.discountPercent / 100)
                ).toFixed(2)}
              </p>

              <SaleItem text={props.Product.discountPercent} scale={0.6} />
            </div>
          ) : (
            <p className={classes.pExtraPaddingTop}>${props.Product.price}</p>
          )}
          
          <Link to={`/products/${props.Product.id}`}>Details</Link>
          <ProductItemForm onAddToCart={addToCartHandler} /> 
        </div>

        <div className={classes.section}>
        <div className={classes.myCard}></div>
        <Link to={`/products/${props.Product.id}`}>
            <img
              className={classes.productNavImage}
              src={props.Product.directory + props.Product.large_image}
            />
          </Link>
        </div>
      </div>

    </Card>
  );
}
