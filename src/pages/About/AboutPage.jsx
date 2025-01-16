import MainPageLayout from "../../components/MainPageLayout";
import CompanyImg from "../../assets/images/company_1.webp";
import ProjectImg from "../../assets/images/project_1.webp";
import testImg from "../../assets/images/test.jpg";
import "./AboutPage.css";
import Section from "../../components/Section";
import ProjectList from "../../components/ProjectList";
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
        <Section className={`py-6 gap-9`}>
          <h2 className="text-2xl font-semibold capitalize">Details</h2>
          {/* <!-- Wrapper div --> */}
          <div className="flex sm:flex-row flex-col gap-7">
            {/* <!-- col-1 --> */}
            <Section className={`flex-1 gap-6 sm:max-w-[21.5rem]`}>
              {/* <!-- Experience div --> */}
              <div className="flex flex-col gap-6 shrink-0 border rounded-xl border-gray-300 p-5 w-full">
                <div>
                  <div className="mb-1 text-sm">Experience</div>
                  <div className="font-semibold">8 years</div>
                </div>
                <div>
                  <div className="mb-1 text-sm">Time zone</div>
                  <div className="font-semibold">EST (UTC-5)</div>
                </div>
                <div>
                  <div className="mb-1 text-sm">Email</div>
                  <div className="font-semibold">tzztson@gmail.com</div>
                </div>
                <div>
                  <div className="mb-1 text-sm">GitHub</div>
                  <div className="font-semibold">gungho0619</div>
                </div>
                <div>
                  <div className="mb-1 text-sm">LinkedIn</div>
                  <div className="font-semibold">gungho0619</div>
                </div>
              </div>
              {/* <!-- Experience div --> */}

              {/* <!-- Tech stack div --> */}
              <Section className={` flex-1  gap-6`}>
                <div className="font-bold text-lg capitalize">Stack</div>
                {/* <!-- Tech stack pills container --> */}
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50">
                    <span>Javascript</span>
                  </div>
                  <div className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50">
                    <span>Typescript</span>
                  </div>
                  <div className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50">
                    <span>Postgres</span>
                  </div>
                  <div className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50">
                    <span>NodeJs</span>
                  </div>
                  <div className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50">
                    <span>React</span>
                  </div>
                  <div className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50">
                    <span>NextJs</span>
                  </div>
                  <div className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50">
                    <span>Jest</span>
                  </div>
                  <div className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50">
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50">
                    <span>Git/Github</span>
                  </div>
                </div>
                {/* <!-- Tech stack pills container --> */}
              </Section>
              {/* <!-- Tech stack div --> */}

              {/* <!-- Interests div --> */}
              <Section className={` flex-1 gap-6`}>
                <div className="font-bold text-lg capitalize">Interests</div>
                {/* <!-- Tech stack pills container --> */}
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50">
                    <span>Drawing</span>
                  </div>
                  <div className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50">
                    <span>Anime</span>
                  </div>
                </div>
                {/* <!-- Tech stack pills container --> */}
              </Section>
              {/* <!-- Interests div --> */}
            </Section>

            {/* <!-- col-1 --> */}

            {/* <!-- col-2 --> */}
            <Section className="flex flex-1 flex-col gap-6">
              <div className="text-lg font-semibold">Experience</div>
              {/* <!-- Comapny 1 --> */}
              <div className="flex flex-col gap-4">
                {/* <!-- title --> */}
                <div className="flex items-center gap-4">
                  {/* <!-- company image --> */}
                  <div className="h-10 w-10 rounded border">
                    <img
                      src={CompanyImg}
                      width="60"
                      loading="lazy"
                      alt="company image"
                    />
                  </div>
                  {/* <!-- company image --> */}

                  {/* <!-- position/company name --> */}
                  <div>
                    {/* <!-- position --> */}
                    <div className="font-semibold">Full Stack Engineer</div>
                    {/* <!-- position --> */}
                    {/* <!-- company name --> */}
                    <div className="text-sm text-gray-500">LOLICO</div>
                    {/* <!-- company name --> */}
                  </div>
                  {/* <!-- position/company name --> */}
                </div>
                {/* <!-- title --> */}
                {/* <!-- dates --> */}
                <div className="text-sm">
                  Jun 2022 - Feb 2024 ⋅ 1 year 9 months
                </div>
                {/* <!-- dates --> */}
                {/* <!-- description --> */}
                <div className="text-sm">
                  At Lolico, I had the opportunity to serve as both a team lead
                  and an engineering manager for a team. In my role as a team
                  lead, I maintained close communication with the client,
                  planned upcoming work, estimated tasks, and ensured smooth
                  operations. As an engineering manager, I prioritized team
                  happiness and developed growth plans for engineers.
                  Additionally, I gained experience as a technical interviewer
                  for the hiring team. In my capacity as an engineer, I worked
                  with various technologies including frontend, backend, desktop
                  applications, and Debian packages. Notably, I successfully
                  implemented a UI Kit and led the redesign of a web
                  application.
                </div>
                {/* <!-- description --> */}
              </div>
              {/* <!-- Comapny 1 --> */}

              {/* <!-- Comapny 2 --> */}
              <div className="flex flex-col gap-4">
                {/* <!-- title --> */}
                <div className="flex items-center gap-4">
                  {/* <!-- company image --> */}
                  <div className="h-10 w-10 rounded border">
                    <img
                      src={CompanyImg}
                      width="60"
                      loading="lazy"
                      alt="company image"
                    />
                  </div>
                  {/* <!-- company image --> */}

                  {/* <!-- position/company name --> */}
                  <div>
                    {/* <!-- position --> */}
                    <div className="font-semibold">Full Stack Engineer</div>
                    {/* <!-- position --> */}
                    {/* <!-- company name --> */}
                    <div className="text-sm text-gray-500">LOLICO</div>
                    {/* <!-- company name --> */}
                  </div>
                  {/* <!-- position/company name --> */}
                </div>
                {/* <!-- title --> */}
                {/* <!-- dates --> */}
                <div className="text-sm">
                  Jun 2022 - Feb 2024 ⋅ 1 year 9 months
                </div>
                {/* <!-- dates --> */}
                {/* <!-- description --> */}
                <div className="text-sm">
                  At Lolico, I had the opportunity to serve as both a team lead
                  and an engineering manager for a team. In my role as a team
                  lead, I maintained close communication with the client,
                  planned upcoming work, estimated tasks, and ensured smooth
                  operations. As an engineering manager, I prioritized team
                  happiness and developed growth plans for engineers.
                  Additionally, I gained experience as a technical interviewer
                  for the hiring team. In my capacity as an engineer, I worked
                  with various technologies including frontend, backend, desktop
                  applications, and Debian packages. Notably, I successfully
                  implemented a UI Kit and led the redesign of a web
                  application.
                </div>
                {/* <!-- description --> */}
              </div>
              {/* <!-- Comapny 2 --> */}
            </Section>
            {/* <!-- col-2 --> */}
          </div>
          {/* <!-- Wrapper div --> */}
        </Section>
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
