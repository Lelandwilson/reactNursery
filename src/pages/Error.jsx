import React from "react";
import { Link } from "react-router-dom";
import classes from "./Error.module.css";
import Card from "../components/UI/Card";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <section className={classes.section}>
      <Card>
        <div className={classes['Error-Main-section']}>
          <h2 className={classes.pageTitle}>404</h2>
          <h5>Page not found</h5>
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      </Card>
    </section>
  );
};
export default Error;
