import React from "react";
import StaffTable from "../components/StaffTable";
import classes from "./About.module.css";
import Card from "../components/UI/Card";
import Footer from "../components/Footer";

const About = (props) => {
  

  return (
    <section className={classes.bodySection}>
      <h2 className={classes.pageTitle}>About</h2>
      <Card>
        <article>
          <h5>Our Story</h5>
          <p className={classes.ourStory}>
            We are a family-owned and operated business that has been providing
            quality native plants to the Melbourne community for over 20 years.
            We are passionate about Australian flora and fauna and we aim to
            offer a wide range of native plants that are suitable for different
            climates, soils and lifestyles. Whether you are looking for
            ground-covers, shrubs, trees, grasses or flowers, we have something
            for everyone. Our native plants are grown locally and ethically
            sourced from reputable nurseries and suppliers. We also offer expert
            advice on how to care for your native plants and create beautiful
            landscapes that attract wildlife and enhance your wellbeing. Come
            and visit us today and discover the beauty and diversity of
            Australian native plants.
          </p>
        </article>
      </Card>
      <Card>
        <h5>Where To Find Us</h5>
        <div className={classes.mapSection}>
          <div className={classes.mapLeft}>
          <img className={classes.googleMap} src="/images/Googlemap.jpg" />
          </div>
          <div className={classes.mapRight}>
            <p>Good Gums Pty Ltd</p>
            <p>123 Fake St</p>
            <p>Melbourne, 3004</p>
            <p>Victoria, Australia</p>
            <br />
            <p>Phone: 1300-PLANT</p>
            <p> Email: info@goodgums.com.au</p>
          </div>
        </div>
      </Card>
      <Card>
        <h5>Meet Our Staff</h5>
        <StaffTable />
      </Card>
      <Footer />
    </section>
    
  );
};
export default About;
