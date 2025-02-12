import { Link } from "react-router-dom";

import brandLogo from "../../assets/logos/logo.svg";
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { handleChangeTheme } from "../../utils/browser";
import "../../styles/Tooltip.css";

import BottomNav from "../BottomNav/BottomNav";

const Navbar = () => {
  return (
    <>
      <header className="sticky h-header top-0 z-20 flex  w-full backdrop-blur-2xl">
        <div className="mx-auto w-full max-w-6xl ">
       
          <nav className="flex items-center md:gap-6 gap-3 md:justify-normal justify-between">
            {/* <!-- Brand logo --> */}
            <div className="logo inline-flex shrink-0 md:ml-0 ml-3 pt-0.5">
              <Link to={`/`}>
                <img
                  src={brandLogo}
                  className="rounded-full w-brand_logo"
                  alt="brand logo"
                />
              </Link>
            </div>
            {/* <!-- Brand logo --> */}
            <div className="md:flex items-center md:gap-6 gap-4 hidden">
             <Link to={"/projects"} className="text-base font-bold text-primary">
                Projects
              </Link>
              <Link to={"/about"} className="text-base font-bold text-primary">
                About
              </Link>
              <a href="#" className="text-base font-bold text-primary">
                Contact
              </a>
            </div>

            <div className="md:ml-auto flex gap-4 items-center">
              {/* <!-- Social media icons --> */}

              <div className="tooltip" data-tool-tip="change theme">
                <button
                  className="flex-shrink-0 dark:hidden block"
                  onClick={() => {
                    handleChangeTheme("dark");
                  }}
                >
                  <FaRegMoon className="dark:text-white text-black size-[1.3rem] md:size-[1.4rem]" />
                </button>

                <button
                  className="flex-shrink-0 dark:block hidden"
                  onClick={() => {
                    handleChangeTheme("light");
                  }}
                >
                  <LuSunMedium className="dark:text-white text-black size-[1.5rem]" />
                </button>
              </div>

              <a
                href="https://github.com/randhavevaibhav"
                className="inline-flex shrink-0 tooltip"
                data-tool-tip="Github"
                target="_blank"
              >
                <FaGithub className="dark:text-white text-black size-[1.5rem]" />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-randhave-b8b099205/"
                className="inline-flex shrink-0 md:ml-0 mr-3 tooltip"
                data-tool-tip="LinkedIn"
                target="_blank"
              >
                <FaLinkedin className="dark:text-white text-black size-[1.5rem]" />
              </a>

              {/* <!-- Social media icons --> */}
            </div>
          </nav>
        </div>
      </header>

      <BottomNav />
    </>
  );
};

export default Navbar;
