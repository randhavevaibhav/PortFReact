import MainPageLayout from "../../components/MainPageLayout";

import testImg from "../../assets/images/test.jpg";
import "./AboutPage.css";
import Section from "../../components/Section";
import ProjectList from "../../components/ProjectList";
import Details from "../../components/AboutPageComponents/Details/Details";

const AboutPage = () => {
  return (
    <>
      <MainPageLayout>
        {/* <!-- About me container --> */}
        <Section className={`py-6 gap-4`}>
          <h2 className="text-4xl font-bold">About Me</h2>

          <div className="about_me_grid grid gap-8">
            <div className="title_container py-6">
              <h1 className="lg:text-4xl text-3xl font-bold">
                I ❤️ to build things
              </h1>
            </div>
            <div className="description_container">
              <p className="sm:text-lg text-base">
                I am a proficient full-stack web developer specializing in
                blockchain and artificial intelligence (AI) with 8 years of
                experience. I excel in crafting secure, scalable web
                applications that leverage blockchain for decentralized
                solutions. I integrate AI technologies for advanced analytics
                and machine learning, enhancing user interaction and operational
                efficiency. My passion lies in delivering innovative,
                cutting-edge solutions that drive technological advancement and
                business success.
              </p>
            </div>
            {/* <!-- Profile image --> */}
            <div className="image_container w-full flex justify-center">
              <img
                src={testImg}
                className="object-cover aspect-ratio:1/1 w-72 h-72"
                alt="profile image"
              />
            </div>
          </div>
          <div>
            <a href="#" className="font-semibold underline">
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
          <h2 className="text-2xl font-semibold capitalize">Projects</h2>
          <ProjectList />
          <a
            href="#"
            className="px-5 py-4 border font-bold inline-flex leading-none"
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
