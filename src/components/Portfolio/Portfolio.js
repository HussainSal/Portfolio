import { Button, Link, Typography } from "@material-ui/core";
import React from "react";
import classes from "./Portfolio.module.css";
import projectData from "../../assets/projectData";
import GitHubIcon from "@material-ui/icons/GitHub";

import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  projectContainer: {
    color: "#FFF",
  },
  projectHeading: {
    color: "#FFF",
    paddingBottom: "30px",
    textTransform: "uppercase",
    wordSpacing: "10px",
  },
  projectDescription: {
    color: "#FFF",
    wordSpacing: "5px",
  },
});

const Portfolio = () => {
  const style = useStyle();

  return (
    <section id="work" className={classes.section}>
      <div className={classes.container}>
        <Typography
          variant="h1"
          style={{ color: "#797575", textTransform: "uppercase" }}
        >
          projects
        </Typography>
      </div>
      {projectData.map((cur) => {
        return (
          <div className={`${classes.projectContainer} `}>
            <div className={classes.project}>
              <div className={classes.projectDescription}>
                <Typography variant="h2" className={style.projectHeading}>
                  {cur.name}
                </Typography>
                <Typography variant="h6" className={style.projectDescription}>
                  {cur.description}
                </Typography>
                <Link
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  href={cur.githubLink}
                >
                  <Button
                    style={{ color: "#FFF", margin: "20px", cursor: "none" }}
                  >
                    <GitHubIcon
                      style={{ paddingRight: "10px" }}
                      color="secondary"
                    />
                    Code
                  </Button>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  href={cur.siteLink}
                >
                  <Button
                    variant="contained"
                    style={{ color: "black", margin: "20px", cursor: "none" }}
                  >
                    visit{" "}
                  </Button>
                </Link>
              </div>
            </div>
            <div className={classes.projectImage}>
              <img className={classes.img} src={cur.image} alt="" />
              <div className={classes.projectInfo}>
                {cur.technoUsed.map((id) => (
                  <Typography variant="h6" id="info" style={{ color: "#FFF" }}>
                    {" "}
                    {id}{" "}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className={`${classes.projectContainer} `}>
                <div className={classes.project}>
                    <div className={classes.projectDescription}>
                    <Typography variant='h2' className={style.projectHeading} >{projectData[1].name}</Typography>
                    <Typography variant='h6' className={style.projectDescription}>{projectData[1].description}</Typography>
                    </div>
                </div>
                <div className={classes.projectImage}>
                    <img className={classes.img}  width='550px' height='300px' src={projectData[1].image} alt='' />
                </div>    

            </div> */}
      {/* <div className={`${classes.projectContainer} `}>
                <div className={classes.project}>
                    <div className={classes.projectDescription}>
                    <Typography variant='h2' className={style.projectHeading} >crypto app</Typography>
                    <Typography variant='h6' className={style.projectDescription}>A Crypto App made with ReactJs. It fetches information from an API, and displays it in a nice way and also details of any coin .</Typography>
                    </div>
                </div>
                <div className={classes.projectImage}>
                    <img className={classes.img}  width='550px' height='300px' src={project3} alt='' />
                </div>    

            </div> */}

      {/* <div className={`${classes.projectContainer} `}>
                <div className={classes.project}>
                    <div className={classes.projectDescription}>
                    <Typography variant='h2' className={style.projectHeading} >crypto app</Typography>
                    <Typography variant='h6' className={style.projectDescription}>A Crypto App made with ReactJs. It fetches information from an API, and displays it in a nice way and also details of any coin .</Typography>
                    </div>
                </div>
                <div className={classes.projectImage}>
                    <img className={classes.img}  width='550px' height='300px' src={project4} alt='' />
                </div>    

            </div> */}
    </section>
  );
};

export default Portfolio;
