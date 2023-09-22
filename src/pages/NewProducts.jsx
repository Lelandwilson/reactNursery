import React, { useState } from "react";
import products from "../Database/productData.js";
import Card from "../components/UI/Card";
import classes from "./Products.module.css"; //NOTE USES PRODUCTS CSS
import SingleProductListing from "../components/SingleProductListing.jsx";
import Footer from "../components/Footer.jsx";

const NewProducts = () => {
  return (
    <section className={classes.mainSection}>
      <div>
        <h2 className={classes.pageTitle}>New To Our Store</h2>
        <Card bgc="#EEEEEE">
          <div className={classes["grid-container"]}>
            {products.map(
              (product) =>
                product.new && (
                  <SingleProductListing Product={product} key={product.id} />
                )
            )}
          </div>
        </Card>
      </div>
      <Footer />
    </section>
  );
};

export default NewProducts;
