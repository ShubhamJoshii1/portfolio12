import {useState } from "react";
import Aboutme from "./Components/Aboutme";
import Certificate from "./Components/Certificate";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import FrontPage from "./Components/FrontPage";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./Styles/main.scss";
function App() {
  const [activeNavbar, setActiveNavbar] = useState('Home');
  return (
    <>
      {/* <Header activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar}/>       */}
      <FrontPage activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar}/>
      <Aboutme setActiveNavbar={setActiveNavbar}/>
      <Skills setActiveNavbar={setActiveNavbar}/>
      <Projects setActiveNavbar={setActiveNavbar}/>
      <Certificate setActiveNavbar={setActiveNavbar}/>
      <ContactMe setActiveNavbar={setActiveNavbar}/>
      <Footer setActiveNavbar={setActiveNavbar} activeNavbar={activeNavbar}/>
    </>
  );
}

export default App;