import { MainPageLayout } from "../../components/MainPageLayout/MainPageLayout";
import { Section } from "../../components/common/Section/Section";
import { Pills } from "../../components/common/Pills/Pills";
import { Link } from "react-router-dom";
import { allProjectsList } from "./data";
import { useScrollTop } from "../../hooks/useScrollTop";

export const ProjectsListPage = () => {
  useScrollTop();
  return (
    <MainPageLayout>
      <Section className="grid grid-cols-1 text-primary gap-8">
        {allProjectsList.map((project) => {
          return (
            <div className="flex flex-col gap-4 cursor-pointer border-themeborder border rounded-md p-5"  key={project.id}>
              {" "}
              <Link to={`${project.id}`}>
                <div className="top md:flex gap-4">
                  <img
                    src={project.img}
                    alt="project img"
                    className="h-32 w-40"
                  />

                  <div>
                    <h2 className="title text-3xl font-semibold mb-3 md:mt-0 mt-2">
                      {project.title}
                    </h2>
                    <p className="summary text-start">{project.summary}</p>
                  </div>
                </div>
              </Link>
              <Pills list={project.ProjectTechStackList} />
            </div>
          );
        })}
      </Section>
    </MainPageLayout>
  );
};
