import React from "react";
import classes from "./Home.module.css";
import useWindowDimensions from "../components/UI/UseWindowDimension";
import HomeBestSellers from "../components/UI/HomeBestSellers";
import HomeNewReleases from "../components/UI/HomeNewReleases";
import Testimonials from "../components/UI/Testimonials";
import Footer from "../components/Footer";

const Home = (props) => {
  const { height, width } = useWindowDimensions();
  const smallerScreenSize = 760;

  return (
    <>
      <section className={classes.hero}>
        <div className={classes["hero-content"]}>
          <h1 className={classes["hero-title"]}>
            Discover the World of natives today!
          </h1>
        </div>
      </section>

      <section>
        <HomeBestSellers />
      </section>

      <section
        className={classes.section}
        style={{ backgroundColor: "#344e41" }}
      >
        <h3 style={{color:'whitesmoke'}}>Newest Releases</h3>
        <HomeNewReleases display={width} smallScreen={smallerScreenSize} />
      </section>

      <section
        className={classes.section}
        style={{ backgroundColor: "#EEE" }}
      >
        <h3>Our Recent Reviews</h3>
        <Testimonials display={width} smallScreen={smallerScreenSize} />
      </section>
     <Footer />
    </>
  );
};
export default Home;
