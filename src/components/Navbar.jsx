import brandLogo from "../assets/logos/logo.svg";
import moonSVG from "../assets/logos/moon.svg";
import sunSVG from "../assets/logos/sun.svg";
import { Link } from "react-router-dom";
import GithubSVG from "./GithubSVG";
import LinkedInSVG from "./LinkedInSVG";
import { useState } from "react";
import HomeSVG from "./HomeSVG";
import IdeaSVG from "./IdeaSVG";
import PersonSVG from "./PersonSVG";
import PhoneSVG from "./PhoneSVG";
const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = (changedTheme) => {
    setTheme(changedTheme);
    if (changedTheme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");

    }
    if (changedTheme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");

    }
  }

  return (<>
    <header className="sticky h-20 md:h-28 top-0 z-20 flex pt-4 w-full backdrop-blur">
      <div className="mx-auto w-full max-w-6xl ">
        {/* for now addded overflow scroll to nav need to remove and convert it to sidebar */}
        <nav className="flex items-center md:gap-6 gap-3 md:justify-normal justify-between">
          {/* <!-- Brand logo --> */}
          <div className="logo inline-flex shrink-0 md:ml-0 ml-3">
            <Link to={`/`}>
              <img src={brandLogo} className="rounded-full size-16 md:size-20" alt="brand logo" />
            </Link>
          </div>
          {/* <!-- Brand logo --> */}

          <div className="md:flex items-center md:gap-6 gap-4 hidden">
            <a href="#projects" className="text-base text-primary font-bold">
              Projects
            </a>
            <Link to={"/about"} className="text-base font-bold text-primary">
              About
            </Link>
            <a href="#" className="text-base font-bold text-primary">
              Contact
            </a>
          </div>

          <div className="md:ml-auto flex gap-4 items-center">
            {/* <!-- Social media icons --> */}

            {theme === "light" && <button className="flex-shrink-0" onClick={() => {
              handleChangeTheme("dark");


            }}><img src={moonSVG} width={"30px"} alt="moon SVG" /> </button>}

            {theme === "dark" && <button className="flex-shrink-0" onClick={() => {
              handleChangeTheme("light");


            }}><img src={sunSVG} width={"30px"} alt="moon SVG" /> </button>}

            <a href="https://github.com/randhavevaibhav" className="inline-flex shrink-0" target="_blank">
              <GithubSVG />
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-randhave-b8b099205/" className="inline-flex shrink-0 md:ml-0 mr-3" target="_blank">
              <LinkedInSVG />
            </a>

            {/* <!-- Social media icons --> */}
          </div>
        </nav>
      </div>
    </header>


    <div className="md:hidden items-center md:gap-6 gap-4 flex fixed bottom-0 w-full justify-around backdrop-blur">
      <Link to={"/"} className="text-xs text-primary font-bold flex flex-col items-center">
        <span><HomeSVG /></span>
        <span>Home</span>
      </Link>
      <a href="#projects" className="text-xs text-primary font-bold flex flex-col items-center">
        <span><IdeaSVG /></span>
        <span>Projects</span>
      </a>
      <Link to={"/about"} className="text-xs font-bold text-primary flex flex-col items-center">
        <span><PersonSVG /></span>

        <span>About</span>
      </Link>
      <a href="#" className="text-xs font-bold text-primary flex flex-col items-center">
        <span><PhoneSVG /></span>
        <span>Contact</span>

      </a>
    </div>


  </>

  );
};

export default Navbar;
