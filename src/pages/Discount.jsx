import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import products from "../Database/productData.js";
import Card from "../components/UI/Card";
import classes from "./Products.module.css"; //NOTE USES PRODUCTS CSS
import SingleProductListing from "../components/SingleProductListing.jsx";
import Footer from "../components/Footer.jsx";

const Discount = () => {
  return (
    <section className={classes.mainSection}>
        <h2 className={classes.pageTitle}>Items On Sale</h2>
        <Card className={classes.mainCard} bgc="#EEEEEE">
        <div className={classes["grid-container"]}>
          {products.map(
            (product) =>
              (product.discountPercent ? true : false) && (
                <SingleProductListing Product={product} key={product.id} />
              )
          )}
          </div>
        </Card>
        <Footer />
    </section>
  );
};

export default Discount;
