import project1 from "./projectsImages/project1.png";
import project2 from "./projectsImages/project2.png";
import project3 from "./projectsImages/project3.png";
import project4 from "./projectsImages/project4.png";
import project5 from "./projectsImages/project5.png";

const projectData = [
  {
    name: "Ecommerce App",
    description:
      "An Ecommerce App made with NextJs. User can signup/login and add items to cart and wishlist, then by going to cart can also check total of it and available discount . ",
    image: project5,
    githubLink: "https://github.com/HussainSal/ecommerce-app",
    siteLink: "https://ecommerce-app-zeta.vercel.app/",
    technoUsed: ["NextJs ", " Material-UI"],
  },
  {
    name: "Movie App",
    description:
      "A movie app made with ReactJs. you can click on an Actor, and check information about him/her as well as movies that same actor enters.it uses React Router, and fetches the movie based on the URL, so you can easily reload the page and the data will be still fetched.",
    image: project3,
    githubLink: "https://github.com/HussainSal/movie-app",
    siteLink: "https://movieapp-6827a.web.app/trending",
    technoUsed: ["ReactJS ", "React Router", "RestAPI "],
  },
  {
    name: "Todo App",
    description:
      "A Todo App made with Nextjs. It stores users todo on firebase, and displays task that are completed and yet to be completed.",
    image: project2,
    githubLink: "https://github.com/HussainSal/Todo-using-Nextjs-",
    siteLink: "https://todo-using-next-js-and-material-ui.vercel.app/",
    technoUsed: ["NextJS ", "React Router", " Material-UI", "RestAPI "],
  },

  // {
  //   name: "Crypto App",
  //   description:
  //     "A Crypto App made with ReactJs. It fetches information from an API. User can signup/login and check details about the coin they are interested in.",
  //   image: project1,
  //   githubLink: "https://github.com/HussainSal/Crypto-Project",
  //   siteLink: "https://crypto-c7536.web.app/",
  //   technoUsed: ["ReactJS ", "Redux", " Material-UI", "RestAPI "],
  // },
  {
    name: "Lasles",
    description:
      "A Landing page made with Nextjs. It is a VPN service provider page that displays various offers and services. ",
    image: project4,
    githubLink:
      "https://github.com/HussainSal/lasells-using-Nextjs-and-material-ui",
    siteLink:
      "https://lasells-using-nextjs-and-material-ui-5u4pd64g7-hussainsal.vercel.app/",
    technoUsed: ["NextJS ", " Material-UI"],
  },
];

export default projectData;
