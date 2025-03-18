import React, { useEffect, useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import profileImg from "../../../assets/images/profile.webp";
import { Link } from "react-router-dom";
import Typed from "typed.js";

export const AboutMeSection = () => {
  const titleRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(titleRef.current, {
      strings: ["React", "JavaScript"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className={`md:flex flex-row py-6 gap-9`}>
      <div className="w-52 profile_img rounded-full mx-auto md:mb-0 mb-10 flex-shrink-0">
        <img
          src={profileImg}
          className="rounded-full object-cover"
          alt="profile image"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl  text-center md:text-start text-primary">
          Vaibhav Randhave{" "}
        </h1>
        <span className="text-primary text-base flex items-center gap-2 w-fit md:mx-0 mx-auto">
          <IoLocationOutline className="size-[1.2rem]" />
          Pune, Maharashtra
        </span>

        <h2 className="text-2xl text-center md:text-start text-primary">
          I am <span ref={titleRef}></span> Developer
        </h2>
        <p className="text-base text-base-text-weak sm:text-lg text-primary">
          Welcome to my portfolio! I'm a web developer skilled in React, Redux,
          JavaScript, TypeScript, PostgreSQL, and Tailwind CSS. I specialize in
          building dynamic, responsive applications with clean, maintainable
          code. Explore my work to see how I can help bring your ideas to life!
        </p>
        {/* <!-- Redirects to about me page --> */}
        <div className="flex gap-4">
          <Link
            to={`/about`}
            className="border border-themeborder px-2 py-1 rounded bg-background text-primary"
          >
            About Me
          </Link>
          <a
            href="https://drive.google.com/uc?export=download&id=1CZuRwT9uHImm5OsHCydMLHrd_vFsg_Yq"
            className="border border-themeborder px-2 py-1 rounded bg-background text-primary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};
