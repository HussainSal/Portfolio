import project1 from "./projectsImages/project1.png";
import project2 from "./projectsImages/project2.png";
// import project3 from "./projectsImages/project3.png";
import project4 from "./projectsImages/project4.png";

const projectData = [
  {
    name: "Todo App",
    description:
      "A Todo App made with Nextjs . It stores users todo on firebase , and displays task that are completed and yet to be completed.",
    image: project2,
    githubLink: "https://github.com/HussainSal/Todo-using-Nextjs-",
    siteLink:
      "https://todo-using-next-js-and-material-ui-b4cbho5qy-hussainsal.vercel.app/",
    technoUsed: ["NextJS ", "Redux", " Material-UI", "RestAPI "],
  },
  {
    name: "Crypto App",
    description:
      "A Crypto App made with ReactJs. It fetches information from an API. User can signup/login  and check details about the coin they are interested in.",
    image: project1,
    githubLink: "https://github.com/HussainSal/Crypto-Project",
    siteLink: "https://crypto-c7536.web.app/",
    technoUsed: ["ReactJS ", "Redux", " Material-UI", "RestAPI "],
  },
  {
    name: "Lasells",
    description:
      "A Landing page made with Nextjs .It is a VPN service provider page that displays various offers and services. ",
    image: project4,
    githubLink:
      "https://github.com/HussainSal/lasells-using-Nextjs-and-material-ui",
    siteLink:
      "https://lasells-using-nextjs-and-material-ui-5u4pd64g7-hussainsal.vercel.app/",
    technoUsed: ["NextJS ", " Material-UI"],
  },
];

export default projectData;
