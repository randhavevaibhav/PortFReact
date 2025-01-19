import { Link } from "react-router-dom";

import MainPageLayout from "../components/MainPageLayout";
import Section from "../components/Section";
import ProfileIMg from "../assets/images/profile.webp"
import ProjectList from "../components/ProjectList";
import Typed from "typed.js";
import { useEffect,useRef } from "react";
const HomePage = () => {
const titleRef = useRef(null)
  useEffect(()=>{
    const typed = new Typed(titleRef.current, {
      strings: ['React', 'JavaScript'],
      typeSpeed: 100,
      backSpeed:50,
      loop:true
    });
    return () => {
      
      typed.destroy();
    };

  },[])
  return (
    <>
      <MainPageLayout>
        {/* <!-- Hero --> */}

        <div className={`md:flex flex-row py-6 gap-9`}>
          <div className="w-52 profile_img rounded-full mx-auto md:mb-0 mb-10 flex-shrink-0">
            <img src={ProfileIMg} className="rounded-full object-cover" alt="profile image" />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-center md:text-start text-primary">Vaibhav Randhave</h1>
            <h2 className="text-2xl text-center md:text-start text-primary">I am <span ref={titleRef}></span> Developer</h2>
            <p className="text-base text-base-text-weak sm:text-lg text-primary">
            Welcome to my portfolio! I'm a web developer skilled in React, Redux, JavaScript, TypeScript, PostgreSQL, and Tailwind CSS. I specialize in building dynamic, responsive applications with clean, maintainable code. Explore my work to see how I can help bring your ideas to life!
            </p>
            {/* <!-- Redirects to about me page --> */}
           <div className="flex gap-4">
           <Link
              to={`/about`}
              className="border border-themeborder px-2 py-1 rounded bg-background text-primary"
            >
              About Me
            </Link>
            <Link
              to={`/download`}
              className="border border-themeborder px-2 py-1 rounded bg-background text-primary"
            >
             Download Resume
            </Link>
           </div>
          </div>
        </div>

        {/* <!-- Projects --> */}
        <Section className={`py-6 gap-9`}>
          <h1 className="text-2xl font-bold text-primary">Projects</h1>
          {/* <!-- Projects container --> */}
          <ProjectList />
          {/* <!-- Projects container --> */}

          {/* <!-- Redirects to projects page  --> */}
          <a href="#projects" className="border border-themeborder px-2 py-1 rounded  bg-background text-primary">
            View all
          </a>
        </Section>

        {/* <!-- Contact --> */}
        <Section className={`py-6 gap-4`}>
          <h2 className="text-2xl font-bold text-primary">Connect</h2>
          <p className="text-primary">
            Email me at&nbsp;:&nbsp;
            <a href="#" className="underline text-primary">
              randhavevaibhav3@gmail.com
            </a>
          </p>
          <a href="#" className="underline text-primary">
            Download Resume
          </a>
        </Section>
      </MainPageLayout>
    </>
  );
};

export default HomePage;
