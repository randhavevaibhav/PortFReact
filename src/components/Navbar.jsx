import brandLogo from "../../public/logo.svg";
import moonSVG from "../assets/logos/moon.svg";
import sunSVG from "../assets/logos/sun.svg";
import { Link } from "react-router-dom";
import GithubSVG from "./GithubSVG";
import LinkedInSVG from "./LinkedInSVG";
import { useState } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme =(changedTheme)=>{
    setTheme(changedTheme);
    if(changedTheme==="light")
    {
      document.body.classList.remove("dark");
      document.body.classList.add("light");

    }
    if(changedTheme==="dark")
      {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
  
      }
  }

  return (
    <header className="sticky h-28 top-0 z-20 flex items-center w-full backdrop-blur">
      <div className="mx-auto w-full max-w-6xl">
        {/* for now addded overflow scroll to nav need to remove and convert it to sidebar */}
        <nav className="flex items-center md:gap-6 gap-3 md:overflow-hidden overflow-scroll">
          {/* <!-- Brand logo --> */}
          <div className="logo inline-flex shrink-0">
            <Link to={`/`}>
              <img src={brandLogo} width={80} className="rounded-full" alt="brand logo" />
            </Link>
          </div>
          {/* <!-- Brand logo --> */}

          <div className="flex items-center md:gap-6 gap-4 ">
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

          <div className="ml-auto flex md:gap-4 gap-2 items-center">
            {/* <!-- Social media icons --> */}
          
              {theme === "light" && <button className="flex-shrink-0" onClick={()=>{
                handleChangeTheme("dark");
               
                
              }}><img src={moonSVG} width={"30px"} alt="moon SVG" /> </button> }

              {theme === "dark" && <button className="flex-shrink-0" onClick={()=>{
                handleChangeTheme("light");
               
                
              }}><img src={sunSVG} width={"30px"} alt="moon SVG" /> </button> }
           
            <a href="https://github.com/randhavevaibhav" className="inline-flex shrink-0" target="_blank">
              <GithubSVG />
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-randhave-b8b099205/" className="md:mr-0 mr-10 inline-flex shrink-0" target="_blank">
              <LinkedInSVG />
            </a>

            {/* <!-- Social media icons --> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
