import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import React from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id =>{
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item =>{
    cartCtx.addItem({...item, amount: 1});
  };

  
  let navigate = useNavigate(); 

  const purchaseLink = () =>{
    navigate("/purchase");
    props.onClose();
  }


  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) => (
        <CartItem 
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove = {cartItemRemoveHandler.bind(null, item.id)}
        onAdd = {cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div>
      {!hasItems? <p className={classes.emptyCartText}>Cart is empty</p> : <div></div>}
        <span>Total Amount&nbsp;&nbsp;</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={purchaseLink }>Order</button>}
      </div>
    </Modal>
  );
}
