import React, { useState, useEffect } from "react";
import classes from "./Carousel.module.css";

const Carousel = (props) => {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [intervalId, setIntervalId] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  useEffect(() => {currentIndex},[currentIndex]);


  if (props.hasTimer) {
    // Use effect hook to start auto scroll every two seconds
    useEffect(() => {
      const timer = setInterval(() => {
        nextSlide();
      },props.timerVal); 
      return () => clearInterval(timer); 
    },[currentIndex]);
 
  }


  const nextSlide = () => {
    // If it's the last slide, reset to zero
    if (currentIndex === length - 1) {
      setCurrentIndex(0);
    } else {
      // Otherwise increment by one
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    // If it's the first slide, go to the last one
    if (currentIndex === 0) {
      setCurrentIndex(length - 1);
    } else {
      // Otherwise decrement by one
      setCurrentIndex(currentIndex - 1);
    }
  };



  return (
    <div className={classes["carousel-container"]}>
      <div className={classes["carousel-wrapper"]}>
        <div className={classes["carousel-content-wrapper"]}>
          <div
            className={classes["carousel-content"]}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        {!props.hasTimer && currentIndex > 0 && (
          <button className={classes["left-arrow"]} onClick={prevSlide}>
            ←
          </button>
        )}
        <div className={classes["carousel-content-wrapper"]}>{/*...*/}</div>
        {!props.hasTimer && currentIndex < length - 1 && (
          <button className={classes["right-arrow"]} onClick={nextSlide}>
            →
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
