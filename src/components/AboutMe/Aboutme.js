import { Button, Typography } from "@material-ui/core";
import classes from "./Aboutme.module.css";
import { makeStyles } from "@material-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { useEffect } from "react";
import { Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

gsap.registerPlugin(ScrollTrigger);

const useStyle = makeStyles({
  typo1: {
    color: "#797575",
    textTransform: "uppercase",
  },
  typo2: {
    color: "transparent",
    fontSize: "20px",
    lineHeight: "40px",
  },
  typo3: {
    color: "#FFFFFF",
    fontSize: "20px",
    lineHeight: "40px",
  },
  card: {
    margin: "10px",
    cursor: "pointer",
    color: "transparent",
  },
  cardHeader: {
    height: "25px",
  },
});

const skillsArray = [
  "HTML/HTML 5",
  "CSS/CSS 3",
  "SASS",
  "JAVA SCRIPT",
  "REACT JS",
  "REACT ROUTER",
  "REACT REDUX",
  "NEXT JS",
  "TYPE SCRIPT ",
  "GSAP",
  "MATERIAL UI",
  "GITHUB",
  "FIRE BASE",
];

function Aboutme() {
  const style = useStyle();

  useEffect(() => {
    gsap.fromTo(
      "#author",
      {
        scale: 0.9,
        x: 0,
        Opacity: 0,
      },
      {
        x: window.innerWidth < "500" ? "50%" : "35vw",
        y: 95,
        duration: 2.5,
        scrollTrigger: "#author",
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#aboutme",
      {
        scale: 0.9,
        x: 0,
        opacity: 0,
      },
      {
        x: window.innerWidth < "500" ? "5%" : "35vw",
        y: 100,
        duration: 3,
        scrollTrigger: "#aboutme",
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#title",
      {
        scale: 0.9,
        x: 0,
        Opacity: 0,
      },
      {
        x: "58vw",
        y: 60,
        duration: 1.5,
        scrollTrigger: "#title",
        scale: 2,
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#skillItem",
      {
        scale: 0.9,
        x: "-15vw",
        opacity: 0,
      },
      {
        delay: 0.5,
        x: "18vw",
        y: 120,
        duration: 1,
        scrollTrigger: "#aboutme",
        opacity: 1,
        stagger: 1,
      }
    );

    ScrollTrigger.matchMedia({
      "(max-width:800px)": function () {
        gsap.to("#title", {
          x: "50vw",
          y: 60,
          duration: 1.5,
          scrollTrigger: "#title",
          scale: 2,
          opacity: 1,
        });

        gsap.to(
          "#author",

          {
            x: "20vw",
            y: 95,
            duration: 2.5,
            scrollTrigger: "#author",
            opacity: 1,
          }
        );

        gsap.to(
          "#aboutme",

          {
            x: "20vw",
            y: 100,
            duration: 3,
            scrollTrigger: "#aboutme",
            opacity: 1,
          }
        );
      },

      "(max-width:500px)": function () {
        gsap.to("#title", {
          x: "70vw",
          y: 60,
          duration: 1.5,
          scrollTrigger: "#title",
          scale: 2,
          opacity: 1,
        });

        gsap.to(
          "#author",

          {
            x: "10vw",
            y: 95,
            duration: 2.5,
            scrollTrigger: "#author",
            opacity: 1,
          }
        );

        gsap.to(
          "#aboutme",

          {
            x: "10vw",
            y: 100,
            duration: 3,
            scrollTrigger: "#aboutme",
            opacity: 1,
          }
        );
      },
    });
  }, []);

  // const width = window.innerWidth;

  return (
    <section className={classes.section}>
      <div id="aboutPage" className={classes.container}>
        <div className={classes.aboutContainer}>
          <Typography
            id="title"
            variant="h6"
            className={`${style.typo1} ${classes.typo1}`}
          >
            about me
          </Typography>

          <Typography
            id="author"
            className={`${style.typo2} ${classes.typo2}`}
            variant="h2"
          >
            Salman Mian.
          </Typography>

          <Typography
            id="aboutme"
            variant="body1"
            className={`${style.typo3} `}
          >
            Hello, my name is Salman Mian. <br />
            I have been learning web development since 1 year
            <br />
            and very much dedicated to make myself gear up with some
            professional skills.
            <br />
            I want to learn all the new technologies related to web
            <br />
            development and want to apply all my knowledge to create
            <br />
            something which can have some positive impact
            <br />
          </Typography>
        </div>
        <div id="skillItem" className={classes.skills}>
          <Typography
            variant="h2"
            className={`${style.typo1} ${classes.skillHeading}`}
          >
            Skills
          </Typography>
          <div className={classes.skillList}>
            {skillsArray.map((cur, id) => {
              return (
                <Card className={`${style.card} ${classes.card}`}>
                  <CardHeader
                    className={style.cardHeader}
                    title={cur}
                  ></CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
        <div className={classes.skillContainer}></div>
      </div>
    </section>
  );
}

export default Aboutme;
