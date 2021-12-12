import "../../index.css";
import { Button, ButtonGroup, Link, Typography } from "@material-ui/core";
import classes from "./Header.module.css";
import { makeStyles } from "@material-ui/core";

import { gsap } from "gsap";
import React, { useEffect, useState } from "react";

import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

const useStyle = makeStyles({
  typo: {
    color: "white",
    textTransform: "uppercase",
  },
  name: {
    color: "transparent !important",
    margin: "20px 0px",
  },
  type: {
    letterSpacing: "5px",
    marginBottom: "15px",
  },
  button: {
    color: "#FFFFFF",
    cursor: "none",
  },
});

const mainHandler = () => {
  document.getElementById("mainPage").scrollIntoView({ behavior: "smooth" });
};

const workHandler = () => {
  document.getElementById("work").scrollIntoView({ behavior: "smooth" });
};

const aboutHandler = () => {
  document.getElementById("aboutPage").scrollIntoView({ behavior: "smooth" });
};

const contactHandler = () => {
  document.getElementById("contactPage").scrollIntoView({ behavior: "smooth" });
};

function Header() {
  const style = useStyle();

  useEffect(() => {
    gsap.fromTo(
      "#name",
      {
        x: 0,
        scale: 0.8,
      },
      {
        x: "30vw",
        duration: 2,
        repeat: -1,
        scale: 1.5,
        yoyo: true,
      }
    );

    gsap.fromTo(
      "#developer",
      {
        delay: 50,
        x: -50,
        scale: 0.8,
        opacity: 0,
      },
      {
        opacity: 1,
        x: window.innerWidth < 500 ? "-10%" : "5vw",
        duration: 2,
        delay: 0.5,

        // repeat: -1,
        scale: 1.5,
        yoyo: true,
      }
    );
    gsap.fromTo(
      "#developer2",
      {
        delay: 50,
        x: -50,
        // scale:.8,
        opacity: 0,
      },
      {
        opacity: 1,
        x: window.innerWidth < 500 ? "-17%" : "1vw",
        duration: 2,
        delay: 1,

        // repeat: -1,
        scale: 1.1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <section className={classes.section} id="mainPage">
      <div className={classes.buttonContainer}>
        {Window.innerWidth > 800 ? (
          <Button onClick={mainHandler} className={style.button}>
            home
          </Button>
        ) : (
          ""
        )}

        <Button onClick={workHandler} className={style.button}>
          work
        </Button>
        <Button onClick={aboutHandler} className={style.button}>
          about
        </Button>
        <Button onClick={contactHandler} className={style.button}>
          contact
        </Button>
        <Link
          style={{ textDecoration: "none" }}
          href="https://drive.google.com/file/d/13yrhUe014HMxYHII8dEUuchDMesqp0js/view?usp=sharing"
          target="_blank"
        >
          <Button className={style.button}>resume</Button>
        </Link>
      </div>
      <div className={classes.container}>
        <div className={classes.introContainer}>
          <Typography
            className={`${style.typo} ${classes.hiThere}`}
            variant="subtitle1"
          >
            <b> hi there 👋, i'm </b>
          </Typography>

          <div className={classes.nameContainer}>
            <Typography
              variant="h1"
              className={`${style.name} ${classes.name} `}
              id="name"
            >
              Salman
            </Typography>
          </div>

          <Typography
            id="developer"
            variant="subtitle1"
            className={`${style.typo} ${style.type} `}
          >
            frontend developer 👨‍💻
          </Typography>

          <div className={classes.frontendText}>
            <Typography
              id="developer2"
              className={style.typo}
              variant="subtitle2"
            >
              A Passionate Front-end developer
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
