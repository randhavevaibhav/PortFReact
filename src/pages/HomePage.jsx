import { Link } from "react-router-dom";

import MainPageLayout from "../components/MainPageLayout";
import Section from "../components/Section";
import ProfileIMg from "../assets/logos/github.svg"
import ProjectList from "../components/ProjectList";

const HomePage = () => {
  return (
    <>
      <MainPageLayout>
        {/* <!-- Hero --> */}

        <div className={`md:flex flex-row py-6 gap-9`}>
          <div className="w-52 profile_img rounded-full mx-auto md:mb-0 mb-10 flex-shrink-0">
            <img src={ProfileIMg} className="rounded-full object-cover" alt="profile image" />
          </div>

          <div className="">
            <h1 className="text-4xl text-center md:text-start">Vaibhav Randhave</h1>
            <h2 className="text-2xl text-center md:text-start">Web developer</h2>
            <p className="text-base text-base-text-weak sm:text-lg ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              odio nemo non similique eveniet exercitationem repudiandae
              molestiae voluptatibus cupiditate nobis animi aliquid soluta,
              obcaecati voluptate distinctio consequuntur. Inventore, impedit
              ratione. Perferendis, vero officia assumenda repellat in ipsum
              vitae id? Modi odio consequuntur beatae suscipit officia quidem
              quo in molestiae laboriosam qui ducimus doloribus ut quis, iusto,
              neque omnis iure molestias.
            </p>
            {/* <!-- Redirects to about me page --> */}
           <div className="flex gap-2">
           <Link
              to={`/about`}
              className="border px-2 py-1 rounded bg-gray-200"
            >
              About Me
            </Link>
            <Link
              to={`/download`}
              className="border px-2 py-1 rounded bg-gray-200"
            >
             Download Resume
            </Link>
           </div>
          </div>
        </div>

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
              randhavevaibhav3@gmail.com
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
