import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footerSection}>
      <p>
        Made by Leland Wilson for CSE2ICX Assessment 2 <br />
        &copy; Copyright 2023
      </p>
      <div className={classes.footerIcons}>
        <a href="https://github.com/Lelandwilson">
          <img
            className={classes.gitHubLogo}
            src="/images/github-mark-white.png"
          />
        </a>
        <a href="https://www.linkedin.com/in/leland-wilson-a2948993">
          <img className={classes.gitHubLogo} src="/images/linkedin-mark.png" />
        </a>
      </div>
    </footer>
  );
}
