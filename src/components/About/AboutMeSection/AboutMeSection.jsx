import React from "react";
import { Section } from "../../common/Section/Section";
import profileImg from "../../../assets/images/profile.webp";
export const AboutMeSection = () => {
  return (
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
            applications using <b>React</b>, <b>Redux</b>, <b>TypeScript</b>,{" "}
            <b>PostgreSQL</b>, <b>Tailwind CSS</b>,and <b>Node.js.</b>
          </p>
          <p className="sm:text-lg text-base mb-2">
            I worked at <b>TCS</b> <b>2+ years</b> as an{" "}
            <b>Actimize and web developer</b> and I am currently working as a{" "}
            <b>JavaScript developer</b> with <b>CouponCabin</b> from last{" "}
            <b>10 months</b>, enhancing platform performance and efficiency.
          </p>
          <p className="sm:text-lg text-base mb-2">
            With expertise in front-end and back-end technologies, I help
            businesses improve scalability, optimize UI/UX, and accelerate
            development. Passionate about clean code and problem-solving, I’m
            eager to contribute to impactful projects and drive technical
            success! 🚀
          </p>
        </div>
        {/* <!-- Profile image --> */}
        <div className="image_container w-full flex justify-center">
          <img
            src={profileImg}
            className="object-cover aspect-ratio:1/1 w-72 h-72"
            alt="profile image"
          />
        </div>
      </div>
      <div>
        <a
          href="https://drive.google.com/uc?export=download&id=1CZuRwT9uHImm5OsHCydMLHrd_vFsg_Yq"
          className="font-semibold underline text-primary"
        >
          Download Resume
        </a>
      </div>
    </Section>
  );
};
