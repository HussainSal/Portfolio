import "../../index.css";
import { Button, Typography } from "@material-ui/core";
import classes from "./Header.module.css";
import { makeStyles } from "@material-ui/core";

import { gsap } from "gsap";
import { useEffect } from "react";

import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { Opacity } from "@material-ui/icons";
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
  },
});

const mainHandler = ()=>{
  document.getElementById('mainPage').scrollIntoView({behavior:"smooth"})

}


const aboutHandler = ()=>{
  document.getElementById('aboutPage').scrollIntoView({behavior:"smooth"})

}


const contactHandler = ()=>{
  document.getElementById('contactPage').scrollIntoView({behavior:"smooth"})

}

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
        x: "6vw",
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
        x: "1vw",
        duration: 2,
        delay: 1,

        // repeat: -1,
        scale: 1.1,
        yoyo: true,
      }
    );
  }, []);


  return (
    <section id="mainPage" >
      <div className={classes.buttonContainer}>
        <Button onClick={mainHandler} className={style.button}>work</Button>
        <Button onClick={aboutHandler} className={style.button}>about</Button>
        <Button onClick={contactHandler} className={style.button}>contact</Button>
        <Button className={style.button}>resume</Button>
      </div>
      <div className={classes.container}>
        <div className={classes.introContainer}>
          <Typography className={style.typo} variant="body1">
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
            className={`${style.typo} ${style.type} ${classes.name}`}
          >
            developer + designer 👨‍💻
          </Typography>

          <Typography
            id="developer2"
            className={style.typo}
            variant="subtitle2"
          >
            A Passionate Front-end developer
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Header;
