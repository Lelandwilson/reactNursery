import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./HomeNewReleases.module.css";
import Card from "./Card";
import Carousel from "./Carousel";
import products from "../../Database/productData";

export default function HomeNewReleases(props) {
  const timerValue = 3000;

  var displayItems = props.display > props.smallScreen ? 2 : 1;

  const newlyListedItem = products.filter((product) => {
    if (product.new) {
      return product;
    }
  });

  const newItemPairs = newlyListedItem.reduce(function (
    newItemPairs,
    key,
    index
  ) {
    return (
      (index % displayItems == 0
        ? newItemPairs.push([key])
        : newItemPairs[newItemPairs.length - 1].push(key)) && newItemPairs
    );
  },
  []);

  return (
    <div className={classes.carouselContainer}>
      <Carousel hasTimer={true} timerVal={timerValue}>
        {newItemPairs.map((product) => (
          <div className={classes.carouselCard} key={product[0].id}>
            <Card>
              <div className={classes.newProductGroup}>
                <div>
                  <h5>{product[0].name}</h5>
                  {/* <p>{product[0].commonName}</p> */}
                  <p>🌱 ${product[0].price} each</p>
                  <p>🔆 {product[0].sunLight} </p>
                  <Link to={`/products/${product[0].id}`}>
                  🖱️ Click for More Details
                  </Link>
                </div>
                <div>
                  <Link to={`/products/${product[0].id}`}>
                    <img
                      className={classes.productNavImage}
                      src={product[0].directory + product[0].large_image}
                    />
                  </Link>
                </div>
              </div>
            </Card>

            {product[1] && (
              <Card>
                <div className={classes.newProductGroup}>
                  <div>
                    <h5>{product[1].name}</h5>
                    {/* <p>{product[1].commonName}</p> */}
                    <p>🌱 ${product[1].price} each</p>
                    <p>🔆 {product[1].sunLight} </p>
                    <Link to={`/products/${product[1].id}`}>
                     🖱️ Click for More Details
                    </Link>
                  </div>
                  <div>
                  <Link to={`/products/${product[1].id}`}>
                    <img
                      className={classes.productNavImage}
                      src={product[1].directory + product[1].large_image}
                    />
                    </Link>
                  </div>
                </div>
              </Card>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
