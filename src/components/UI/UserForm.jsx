import React, { useState } from "react";
import classes from "./UserForm.module.css";

export default function UserForm() {
  //useState Used here to hide all for missing field notifications on page entry
  const [_fName, _setFName] = useState(true);
  const [_lName, _setLName] = useState(true);
  const [_email, _setEmail] = useState(true);
  const [_phone, _setPhone] = useState(true);
  const [_stAddress, _setStAddress] = useState(true);
  const [_city, _setCity] = useState(true);
  const [_state, _setState] = useState(true);
  const [_postage, _setPostage] = useState(true);
  const [_termsOfServices, _setTermsOfServices] = useState(false);

  const [_tosText, _setTosText] = useState("black");

  //default render values
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone:"",
    streetAddress: "",
    city: "",
    state: "",
    comments: "",
    shipping: "",
    payment: "Paypal",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const handleTermsChange = () => {
    _setTermsOfServices(!_termsOfServices);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (state.firstName.trim().length === 0) {
      _setFName(false);
      return;
    } else {
      _setFName(true);
    }

    if (state.lastName.trim().length === 0) {
      _setLName(false);
      return;
    } else {
      _setLName(true);
    }

    if (state.email.trim().length === 0) {
      _setEmail(false);
      return;
    } else {
      _setEmail(true);
    }

    if (state.phone.trim().length === 0) {
      _setPhone(false);
      return;
    } else {
      _setPhone(true);
    }

    if (state.streetAddress.trim().length === 0) {
      _setStAddress(false);
      return;
    } else {
      _setStAddress(true);
    }

    if (state.city.trim().length === 0) {
      _setCity(false);
      return;
    } else {
      _setCity(true);
    }

    if (state.state.trim().length === 0) {
      _setState(false);
      return;
    } else {
      _setState(true);
    }

    if (state.shipping.trim().length === 0) {
      _setPostage(false);
      return;
    } else {
      _setPostage(true);
    }

    if (!_termsOfServices) {
      _setTosText("red");
    } else {
      _setTosText("black");
    }

    //If all section sof the form are filled out then proceed...
    if (
      _fName === true &&
      _lName === true &&
      _email === true &&
      _phone === true &&
      _stAddress === true &&
      _city === true &&
      _state === true &&
      _postage === true &&
      _termsOfServices === true
    ) {
      console.log(state);
      console.log(`Forwarding onto: ${state.payment}`);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h5>Please provide your shipping details</h5>
      {!_fName && (
        <h6 className={classes.errorText}>Please fill in your first name.</h6>
      )}
      <input
        className={classes.userForm}
        placeholder="First Name"
        type="text"
        name="firstName"
        value={state.firstName}
        onChange={handleChange}
      />
      <br />
      {!_lName && (
        <h6 className={classes.errorText}>Please fill in your last name.</h6>
      )}
      <input
        className={classes.userForm}
        placeholder="Last Name"
        type="text"
        name="lastName"
        value={state.lastName}
        onChange={handleChange}
      />
      <br />
      {!_email && (
        <h6 className={classes.errorText}>
          Please fill in your email address.
        </h6>
      )}
      <input
        className={classes.userForm}
        placeholder="Email Address"
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <br />
      {!_phone && (
        <h6 className={classes.errorText}>
          Please fill in your phone number.
        </h6>
      )}
      <input
        className={classes.userForm}
        placeholder="Phone number"
        type="tel"
        name="phone"
        value={state.phone}
        onChange={handleChange}
      />
      <br />
      {!_stAddress && (
        <h6 className={classes.errorText}>
          Please fill in your street address.
        </h6>
      )}
      <input
        className={classes.userForm}
        placeholder="Street Address"
        type="text"
        name="streetAddress"
        value={state.streetAddress}
        onChange={handleChange}
      />
      <br />
      {!_city && (
        <h6 className={classes.errorText}>Please fill in your city.</h6>
      )}
      <input
        className={classes.userForm}
        placeholder="City"
        type="text"
        name="city"
        value={state.city}
        onChange={handleChange}
      />
      <br />
      {!_state && (
        <h6 className={classes.errorText}>
          Please select your state from the drop down list.
        </h6>
      )}
      <select
        className={classes.selectBox}
        name="state"
        onChange={handleChange}
        value={state.state}
      >
        <option value="">--Please Select Your State--</option>
        <option value="Vic">Victoria</option>
        <option value="NSW">New South Wales</option>
        <option value="QLD">Queensland</option>
        <option value="NT">Nothern Territory</option>
        <option value="WA">Western Australia</option>
        <option value="TAS">Tasmania</option>
      </select>
      <br />
      {!_postage && (
        <h6 className={classes.errorText}>
          Please select your preferred method of shipping from the drop down
          list.
        </h6>
      )}
      <select
        className={classes.selectBox}
        name="shipping"
        onChange={handleChange}
        value={state.shipping}
      >
        <option value="">--Please Select Shipping Method--</option>
        <option value="EXP">Express</option>
        <option value="COU">Courier</option>
        <option value="STA">Star Track</option>
        <option value="ASP">Australia Post</option>
      </select>

      <br />
      <br />
      <h5>Please provide any additional comments for your order</h5>
      <textarea
        className={classes.comments}
        name="comments"
        value={state.comments}
        onChange={handleChange}
        rows="5"
        cols="40"
      />
      <br />
      <br />

      <div className={classes.paymentRadios}>
        <label>How would you like to make payment?</label>
        <div className={classes.paymentRadiosInner}>
          <input
            type="radio"
            value="Paypal"
            name="payment"
            onChange={handleChange}
            defaultChecked
          />{" "}
          Paypal
          <input
            type="radio"
            value="Direct Deposit"
            name="payment"
            onChange={handleChange}
          />{" "}
          Direct Deposit
          <input
            type="radio"
            value="Other"
            name="payment"
            onChange={handleChange}
          />{" "}
          Other
        </div>
        <br />
        <div>
          <label style={{ color: _tosText }}>
            <input
              type="checkbox"
              onChange={handleTermsChange}
              checked={_termsOfServices}
            />
            I have read and understood the purchase and return policies
          </label>
        </div>
      </div>

      <br />

      <button>Continue to {state.payment}</button>

      <br />
      <br />
    </form>
  );
}
