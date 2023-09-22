import React, { useState, useContext, useEffect } from "react";
import { NavLink} from "react-router-dom";
import useWindowDimensions from "../components/UI/UseWindowDimension";

import classes from "./StyledNavbar.module.css";
import CartContext from "../store/cart-context";


const StyledNavbar = (props) => {
  const { height, width } = useWindowDimensions();
  const smallerScreenSize = 400;

  const [isShown, setIsShown] = useState(false);
 
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const btnClasses = `${classes.navButton} ${btnIsHighlighted ? classes.bump : ''}`;
  useEffect(() =>{
    if(cartCtx.items.length ===0){
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false);
    }, 300);
    
    return() =>{
      clearTimeout(timer);
    };

  },[items])

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);


  return (
    <nav className={classes.navbar}>

      { (width > smallerScreenSize) && <h1 className={classes.logoText}>GoodGums <span>|</span></h1>}

      <div className={classes.navbarButtons}>
        <NavLink 
          to="/"
          // onClick={setUpdate(props.dropMenuBack)}
          id = {classes.navLink}
          className={({ isActive}) =>
            isActive ? classes.active : classes.link
            
          }
        >Home
        </NavLink>
        <NavLink
          to="/about"
          id = {classes.navLink}
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
        >About
        </NavLink>
        <div
          to="/products"
          className={classes.navBtn}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >Products
          {isShown && (
            <div className={classes.dropMenu} style={{backgroundColor: `${props.dropMenuBack}`}}>
              <ul>
                <li>
                  <NavLink className={classes.dropMenuItem} to="/discount">
                    On Sale
                  </NavLink>
                </li>
                <li>
                  <NavLink className={classes.dropMenuItem} to="/newproducts">
                    New Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className={classes.dropMenuItem} to="/products">
                    All Products
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <NavLink
          to="/purchase"
          id = {classes.navLink}
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
        >Purchase
        </NavLink>
        <div className={classes.navBtn} onClick={props.onShowCart}>
           Cart <span className={classes.badge}>{numberOfCartItems}</span>
        </div>
      </div>
    </nav>
  );
};

export default StyledNavbar;
