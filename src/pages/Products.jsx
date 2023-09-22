import React from "react";
import products from "../Database/productData.js";
import Card from "../components/UI/Card";
import classes from "./Products.module.css";
import SingleProductListing from "../components/SingleProductListing.jsx";
import Footer from "../components/Footer.jsx";

const Products = () => {
  return (
    <section className={classes.mainSection}>
      <h2 className={classes.pageTitle}>All Products</h2>

      <Card bgc="#EEEEEE">
        <div className={classes["grid-container"]}>
          {products.map((product) => (
            <SingleProductListing Product={product} key={product.id} />
          ))}
        </div>
      </Card>
      <Footer />
    </section>
  );
};

export default Products;
