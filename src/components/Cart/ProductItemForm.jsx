import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./ProductItemForm.module.css";

export default function ProductItemForm(props) {
  
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
          
        }}
      />
      <button>Add to Cart</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};