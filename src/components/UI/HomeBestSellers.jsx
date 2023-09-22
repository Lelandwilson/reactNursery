import React from 'react';
import { Link } from "react-router-dom";
import classes from './HomeBestSellers.module.css';
export default function HomeBestSellers(){
return(
    <section className={classes.section}>
        <h3>Best Sellers</h3>
        <p>Click on an item to find out more info! 🪴</p>
        <div></div>
        <div className={classes.secondSection}>
          <Link to={`/products/AAAAAAAAA00000001`}>
            <img
              className={classes.secondSectionImg}
              src="/images/homepage/homeSEC2_1.jpg"
            />
            <p>Golden Wattle</p>
          </Link>
          <Link to={`/products/AAAAAAAAA00000009`}>
            <img
              className={classes.secondSectionImg}
              src="/images/homepage/homeSEC2_2.jpg"
            />
            <p>Snow Gum</p>
          </Link>
          <Link to={`/products/AAAAAAAAA00000002`}>
            <img
              className={classes.secondSectionImg}
              src="/images/homepage/homeSEC2_3.jpg"
            />
            <p>
              Smooth Barked <br /> Apple
            </p>
          </Link>
        </div>
      </section>
);


};