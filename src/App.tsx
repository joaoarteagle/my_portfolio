import "./App.css";
import ArrowDownIcon from "./components/ArrowDown";
import AboutMe from "./components/Sections/AboutMe/AboutMe.section";
import HeaderSection from "./components/Sections/Header/HeaderSection";
import Home from "./components/Sections/Home/Home.section";
import ProjectList from "./components/Sections/Projects/Projects.section";
import SkillsSection from "./components/Sections/Skills/Skills.section";

function App() {
  return (
    <>
      <ArrowDownIcon />
      <div className="containerSections">
        <HeaderSection />
        <Home id="homeSection" />
        <AboutMe id="aboutMeSection" />
        <SkillsSection id="skillsSection" />
        <ProjectList  id="projectsSection"/>
      </div>
    </>
  );
}

export default App;
