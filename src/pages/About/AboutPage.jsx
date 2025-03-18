import {MainPageLayout} from "../../components/MainPageLayout/MainPageLayout";

import ProfileIMg from "../../assets/images/profile.webp";
import "./AboutPage.css";

import { ProjectList } from "../../components/Projects/ProjectList";
import Details from "../../components/Details/Details";
import { Link } from "react-router-dom";
import { useScrollTop } from "../../hooks/useScrollTop";
import { AboutMeSection } from "../../components/About/AboutMeSection/AboutMeSection";

export const AboutPage = () => {
  useScrollTop();
  return (
    <>
      <MainPageLayout>
        {/* <!-- About me container --> */}
        <AboutMeSection />
        {/* <!-- About me container --> */}

        {/* <!-- Details container --> */}

        <Details />
        {/* <!-- Details container --> */}

        {/* <!-- Projects container --> */}
        {/* items-start class affects <a>View all </a> tag*/}
        <div className="flex items-start flex-col gap-9 py-6">
          <h2 className="text-2xl font-semibold capitalize text-primary">
            Projects
          </h2>
          <ProjectList />
          <Link
            to={"/projects"}
            href="#"
            className="px-5 py-3 border-themeborder border rounded-md font-bold inline-flex leading-none text-primary bg-background hover:border-primary"
          >
            View all
          </Link>
        </div>
        {/* <!-- Projects container --> */}
      </MainPageLayout>
    </>
  );
};


