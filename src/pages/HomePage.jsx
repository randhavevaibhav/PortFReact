import { Link } from "react-router-dom";

import MainPageLayout from "../components/MainPageLayout";
import Section from "../components/Section";

import ProjectList from "../components/ProjectList";

const HomePage = () => {
  return (
    <>
      <MainPageLayout>
        {/* <!-- Hero --> */}
        <div className="brand_name py-6">
          <h1 className="text-4xl">XYZ xyz</h1>
        </div>
        <Section className={`py-6 gap-9`}>
          <p className="text-base text-base-text-weak sm:text-lg">
            Hello! I am a dedicated Full-Stack Web Developer with a strong
            passion for AI and Blockchain technologies. With 8 years of
            programming experience, I specialize in crafting sophisticated web
            applications. I am deeply engaged in researching new technologies,
            continually advancing my skills to deliver innovative AI and
            blockchain applications that optimize user experiences and
            operational efficiency. I am available to commit over 40 hours per
            week and operate within the EST time zone, ensuring more than 6 to 8
            hours of overlapping time each day.
          </p>
          {/* <!-- Redirects to about me page --> */}
          <Link to={`/about`} className="border px-2 py-1 rounded bg-gray-200">
            About Me
          </Link>
        </Section>

        {/* <!-- Projects --> */}
        <Section className={`py-6 gap-9`}>
          <h1 className="text-2xl font-bold">Projects</h1>
          {/* <!-- Projects container --> */}
          <ProjectList />
          {/* <!-- Projects container --> */}

          {/* <!-- Redirects to projects page  --> */}
          <a href="#projects" className="border px-2 py-1 rounded bg-gray-200">
            View all
          </a>
        </Section>

        {/* <!-- Contact --> */}
        <Section className={`py-6 gap-4`}>
          <h2 className="text-2xl font-bold">Connect</h2>
          <p>
            Email me at{" "}
            <a href="#" className="underline">
              test@gmail.com
            </a>
          </p>
          <a href="#" className="underline">
            Download Resume
          </a>
        </Section>
      </MainPageLayout>
    </>
  );
};

export default HomePage;
