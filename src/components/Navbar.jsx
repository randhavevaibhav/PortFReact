import gitHubLogo from "../assets/logos/github.svg";
import linkedInLogo from "../assets/logos/linkedin.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="sticky h-16 top-0 z-20 flex items-center w-full backdrop-blur">
      <div className="mx-auto w-full max-w-6xl md:px-4 px-2 pt-2">
        <nav className="flex items-center md:gap-6 gap-3">
          {/* <!-- Brand logo --> */}
          <div className="logo inline-flex shrink-0">
            <Link to={`/`}>
              <img src={gitHubLogo} width={50} height={50} alt="brand logo" />
            </Link>
          </div>
          {/* <!-- Brand logo --> */}

          <div className="flex items-center md:gap-6 gap-4">
            <a href="#projects" className="text-base font-bold">
              Projects
            </a>
            <Link to={"/about"} className="text-base font-bold">
              About
            </Link>
            <a href="#" className="text-base font-bold">
              Contact
            </a>
          </div>

          <div className="ml-auto flex md:gap-4 gap-2">
            {/* <!-- Social media icons --> */}
            <a href="https://github.com/randhavevaibhav" className="inline-flex shrink-0" target="_blank">
              <img src={gitHubLogo} width={22} height={22} alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-randhave-b8b099205/" className="inline-flex shrink-0" target="_blank">
              <img
                src={linkedInLogo}
                width={22} height={22}
                alt="linked in logo"
              />
            </a>

            {/* <!-- Social media icons --> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
