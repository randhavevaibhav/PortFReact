import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import { Link, useParams } from "react-router-dom";
import { allProjectsList } from "./data";
import Pills from "../../components/Pills/Pills";
import { useScrollTop } from "../../hooks/useScrollTop";

const ProjectPage = () => {
  useScrollTop();
  const { id } = useParams();

  const project = allProjectsList.find((project) => {
    return project.id === Number(id);
  });

  return (
    <MainPageLayout>
      <article key={project.id} className="flex flex-col gap-4 text-primary">
        <header>
          <Link to={"/projects"} className="underline font-semibold">
            Click here to go back
          </Link>
          <h1 className="title text-4xl font-semibold">{project.title}</h1>
        </header>
        <div className="hero_section flex flex-col gap-2">
          <img src={project.img} alt="project img" className="w-[700px]" />
          <p className="text-lg">Technologies</p>
          <Pills list={project.ProjectTechStackList} />
        </div>
        <div className="fullDesc">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p>{project.fullDesc}</p>
        </div>
      </article>
    </MainPageLayout>
  );
};

export default ProjectPage;
