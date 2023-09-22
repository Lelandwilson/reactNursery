import React, { useContext, useState } from "react";
import UserForm from "../components/UI/UserForm";
import CartItem from "../components/Cart/CartItem";
import classes from "./Purchase.module.css";
import CartContext from "../store/cart-context";
import Card from "../components/UI/Card";
import Footer from "../components/Footer";

const Purchase = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <>
      <section className="section">
        <h2 className={classes.pageTitle}>Purchase</h2>

        <Card>
          {!hasItems ? (
            <p className={classes.emptyCartText}>Cart is empty</p>
          ) : (
            <div></div>
          )}
          {cartItems}
          <div>
            <p>GST &nbsp; &nbsp; ${(totalAmount/10).toFixed(2)}</p>
            <p>Total Amount &nbsp; &nbsp; ${totalAmount}</p>
          </div>
        </Card>

        <Card>
          <UserForm />
        </Card>
      </section>
      <Footer />
    </>
  );
};

export default Purchase;
