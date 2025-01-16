import gitHubLogo from "../assets/logos/github.svg";
import linkedInLogo from "../assets/logos/linkedin.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="sticky h-16 top-0 z-20 flex items-center w-full md:mb-16 mb-8 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 pt-2">
        <nav className="flex items-center gap-6">
          {/* <!-- Brand logo --> */}
          <div className="logo">
            <Link to={`/`}>
              <img src={gitHubLogo} width="60" height="60" alt="brand logo" />
            </Link>
          </div>
          {/* <!-- Brand logo --> */}

          <div className="flex items-center gap-6">
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

          <div className="ml-auto flex gap-4">
            {/* <!-- Social media icons --> */}
            <a href="#">
              <img src={gitHubLogo} width="30" height="30" alt="github logo" />
            </a>
            <a href="#">
              <img
                src={linkedInLogo}
                width="30"
                height="30"
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
