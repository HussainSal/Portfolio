import { Button, Link, Typography } from "@material-ui/core";
import classes from "./Contact.module.css";
import { makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

gsap.registerPlugin(ScrollTrigger);

const useStyle = makeStyles({
  contactme: {
    textTransform: "uppercase",
    color: "#797575",
  },
  email: {
    marginTop: "40px",
    marginBottom: "80px",
  },
  button: {
    width: "150px",
    transition: "all .2s",
    cursor: "none",

    "&:hover": {
      transform: "scale(1.2)",
      cursor: "none",
    },
  },
  typo2: {
    color: "transparent",
    lineHeight: "40px",
    marginTop: "50px",
  },
  copyright: {
    textTransform: "capitalize",
    marginTop: "30px",
  },
  social: {
    transition: "all .2s",
    transform: "scale(1.3)",

    "&:hover": {
      transform: "scale(1.5)",
    },
  },
});

function Contact() {
  const style = useStyle();

  useEffect(() => {
    gsap.fromTo(
      "#contactme",
      {
        y: "20vh",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        rotate: 360,
        scrollTrigger: { trigger: "#contactme", start: "top 70%" },
      }
    );

    gsap.fromTo(
      "#email",
      {
        x: "80vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
        rotate: 360,
        scrollTrigger: { trigger: "#email", start: "top 70%" },
      }
    );

    gsap.fromTo(
      "#resume",
      {
        x: "-80vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2.5,
        delay: 0.5,
        rotate: 360,
        scrollTrigger: { trigger: "#resume", start: "top 70%" },
      }
    );

    gsap.fromTo(
      "#social",
      {
        y: "-20vh",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        delay: 1,
        rotate: 360,
        scrollTrigger: { trigger: "#social", start: "top 70%" },
      }
    );

    gsap.fromTo(
      "#copyName",
      {
        y: "-20vh",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        delay: 1,
        rotate: 360,
        scrollTrigger: { trigger: "#copyName", start: "top 70%" },
      }
    );
    gsap.fromTo(
      "#copyright",
      {
        y: "-20vh",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        delay: 2,
        rotate: 360,
        scrollTrigger: { trigger: "#copyright", start: "top 70%" },
      }
    );
  }, []);

  return (
    <section className={classes.section}>
      <div id="contactPage" className={classes.container}>
        <Typography id="contactme" variant="h1" className={style.contactme}>
          contact me
        </Typography>
        <Typography id="email" variant="h6" className={style.email}>
          If you want to <b>talk,</b> you can find me at :<br />
          salmanmian54321@gmail.com
        </Typography>
        <Link
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://drive.google.com/file/d/13yrhUe014HMxYHII8dEUuchDMesqp0js/view?usp=sharing"
        >
          <Button
            id="resume"
            className={`${style.button} ${classes.button} `}
            variant="contained"
          >
            Resume
          </Button>
        </Link>

        <div className={classes.referenceContainer}>
          <Link target="_blank" href="https://github.com/HussainSal">
            <GitHubIcon
              color="secondary"
              id="social"
              className={`${style.social} ${classes.social}`}
            />
          </Link>
          <Link target="_blank">
            <LinkedInIcon
              color="secondary"
              id="social"
              className={`${style.social} ${classes.social}`}
            />
          </Link>
          <Link target="_blank" href="https://twitter.com/home">
            <TwitterIcon
              color="secondary"
              id="social"
              className={`${style.social} ${classes.social}`}
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/wernotreallystrangers/"
          >
            <InstagramIcon
              color="secondary"
              id="social"
              className={`${style.social} ${classes.social}`}
            />
          </Link>
        </div>

        <Typography
          id="copyName"
          className={`${style.typo2} ${classes.typo2}`}
          variant="h5"
        >
          Salman Mian.
        </Typography>
        <Typography
          className={`${style.copyright} ${classes.copyright}`}
          variant="h5"
          id="copyright"
        >
          copyright© 2021, salman
        </Typography>
      </div>
    </section>
  );
}

export default Contact;
