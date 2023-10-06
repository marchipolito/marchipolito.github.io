import "./App.css";
// import Profile from "./components/Profile";
// import Social from "./components/Social";
// import Home from "./components/Home";
import Profiles from "./components/Profiles";
// import Projects from "./components/Projects";
// import Header from "./components/Header";
import { GlobalStyleComponent, createGlobalStyle } from "styled-components";
import { AppProvider } from "./context/AppContext";
import {
  faGithub,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPlay,
  faPlusCircle,
  faInfoCircle,
  faInfo,
  faAngleDown,
  faPlus,
  faThumbsUp,
  faTimesCircle,
  faTimes,
  faAngleLeft,
  faAngleRight,
  faCaretDown,
  faFilePdf,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faGithub,
  faYoutube,
  faInstagram,
  faLinkedin,
  faEnvelope,
  faPlusCircle,
  faPlay,
  faInfoCircle,
  faInfo,
  faAngleDown,
  faPlus,
  faThumbsUp,
  faTimesCircle,
  faTimes,
  faAngleLeft,
  faAngleRight,
  faCaretDown,
  faFilePdf,
  faPaperPlane
);

const GlobalFonts = createGlobalStyle`
.title1 {
  font-family: 'Wallpoet', cursive;
}
`;

function App() {
  return (
    <AppProvider>
      <div style={{ overflow: "hidden" }}>
        {/* <Profile />
       <Social /> */}
        {/* <Header /> */}
        {/* <Home /> */}
        {/* <Projects /> */}
        <GlobalFonts />
        <Profiles />
      </div>
    </AppProvider>
  );
}

export default App;
