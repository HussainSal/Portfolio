import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Header from "./components/Header/Header";
import Aboutme from "./components/AboutMe/Aboutme";
import { gsap } from "gsap";
import Cursor from "./components/Cursor/Cursor";

import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Cursor />
        <Header />
        <Portfolio />
        <Aboutme />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
