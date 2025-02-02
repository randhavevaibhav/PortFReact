import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";

import ProfileIMg from "../../assets/images/profile.webp";
import "./AboutPage.css";
import Section from "../../components/Section/Section";
import ProjectList from "../../pages/Projects/ProjectList";
import Details from "./Details/Details";

const AboutPage = () => {
  return (
    <>
      <MainPageLayout>
        {/* <!-- About me container --> */}
        <Section className={`py-6 gap-4`}>
          <h2 className="text-4xl font-bold text-primary">About Me</h2>

          <div className="about_me_grid grid gap-8 text-primary">
            <div className="title_container py-6">
              <h1 className="lg:text-4xl text-3xl md:mx-0 mx-auto w-fit">
                I ❤️ to build things
              </h1>
            </div>
            <div className="description_container ">
              <p className="sm:text-lg text-base mb-2">
                I am a <b>React</b> and <b>JavaScript</b> developer with{" "}
                <b>total 3+ years</b> of experience in building scalable web
                applications using <b>React</b>, <b>Redux</b>, <b>TypeScript</b>
                , <b>PostgreSQL</b>, <b>Tailwind CSS</b>,and <b>Node.js.</b>
              </p>
              <p className="sm:text-lg text-base mb-2">
                I worked at <b>TCS</b> <b>2+ years</b> as an{" "}
                <b>Actimize and web developer</b> and I am currently working as
                a <b>JavaScript developer</b> with <b>CouponCabin</b> from last{" "}
                <b>10 months</b>, enhancing platform performance and efficiency.
              </p>
              <p className="sm:text-lg text-base mb-2">
                With expertise in front-end and back-end technologies, I help
                businesses improve scalability, optimize UI/UX, and accelerate
                development. Passionate about clean code and problem-solving,
                I’m eager to contribute to impactful projects and drive
                technical success! 🚀
              </p>
            </div>
            {/* <!-- Profile image --> */}
            <div className="image_container w-full flex justify-center">
              <img
                src={ProfileIMg}
                className="object-cover aspect-ratio:1/1 w-72 h-72"
                alt="profile image"
              />
            </div>
          </div>
          <div>
            <a href="#" className="font-semibold underline text-primary">
              Download Resume
            </a>
          </div>
        </Section>
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
          <a
            href="#"
            className="px-5 py-4 border font-bold inline-flex leading-none text-primary bg-background"
          >
            View all
          </a>
        </div>
        {/* <!-- Projects container --> */}
      </MainPageLayout>
    </>
  );
};

export default AboutPage;
