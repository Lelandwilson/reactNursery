import React from "react";
import classes from "./Testimonials.module.css";
import testimonials from "../../Database/testimonials";
import Carousel from "./Carousel";

export default function Testimonials(props) {
    
  var displayItems = props.display > props.smallScreen ? 2 : 1;

  const reviewPairs = testimonials.reduce(function (reviewPairs, key, index) {
    return (
      (index % displayItems == 0
        ? reviewPairs.push([key])
        : reviewPairs[reviewPairs.length - 1].push(key)) && reviewPairs
    );
  }, []);

  return (
    <>
      {reviewPairs.length > 0 && (
        <Carousel hasTimer={false} timerVal={0}>
          {reviewPairs.map((singleReview) => (
            <div className={classes.carouselCard} key={singleReview[0].id}>
              <div className={classes.carouselSingleComment}>
                <p>{singleReview[0].comment}</p>
                <p>⭐⭐⭐⭐⭐</p>
                <p>- {singleReview[0].name}</p>
              </div>

              {singleReview[1] && (
                <div className={classes.carouselSingleComment}>
                  <p>{singleReview[1].comment}</p>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>- {singleReview[1].name}</p>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
}
