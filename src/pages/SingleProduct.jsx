import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./SingleProduct.module.css";
import products from "../Database/productData.js";
import Card from "../components/UI/Card";
import SaleItem from "../components/SaleItem";
import CartContext from "../store/cart-context.jsx";
import ProductItemForm from "../components/Cart/ProductItemForm";
import Footer from "../components/Footer";

/*
Notes: useParams used to capture URL for each item and feed into map() to identify item
*/

const SingleProduct = (props) => {
  window.scrollTo(0, 0); //always auto scroll to top of page

  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: product.id,
      name: product.name,
      amount: amount,
      price: product.price,
    });
  };

  const {
    name,
    commonName,
    directory,
    small_image,
    large_image,
    price,
    details,
    link,
    location,
    sunLight,
    discountPercent,
  } = product;

  const discount = discountPercent / 100;
  const DiscountPrice = price - (price * discount).toFixed(2);

  const [toggleSaleIcon, setToggleSaleIcon] = useState(discount ? true : false);

  return (
    <section>
      <Card className={classes.mainSection}>
          <div className={classes.sectionHalf}>
            <h2>{name}</h2>
            <h5>{commonName}</h5>
            {toggleSaleIcon ? (
              <div className={classes.discountSection}>
                <h5>
                  <span className={classes.strikeText}>${price}</span>
                  &nbsp;&nbsp; ${DiscountPrice}
                </h5>
                <SaleItem text={discountPercent} scale={0.8} />
              </div>
            ) : (
              <h5>${price} </h5>
            )}

            <div className={classes.addToCartSection}>
              <ProductItemForm onAddToCart={addToCartHandler} />
            </div>

            <p>Sunlight requirements: {sunLight}</p>
            <br></br>
            <img
              className={classes.image}
              src={directory + small_image}
              alt={name}
            />
            <img
              className={classes.image}
              src={directory + large_image}
              alt={name}
            />
          </div>
          <div className={classes.sectionHalf}>
            <p>
              {details}
              <a href={link} alt="Link to wikipedia page">
                {" "}
                <span className={classes.linkSpan}>Click here</span>
              </a>{" "}
              to head to Wikipedia for more details.
            </p>
            <div>
            <p>Native to:</p>
            <img className={classes.map} src={directory + location} />
            </div>
            <br></br>

            <span className={classes.linkSpan}>
              <Link to="/products">Back to products</Link>
            </span>
          </div>
      </Card>
      <Footer />
    </section>
  );
};

export default SingleProduct;
