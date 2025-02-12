import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import Section from "../../components/Section/Section";
import Pills from "../../components/Pills/Pills";
import { Link } from "react-router-dom";
import { allProjectsList } from "./data";
import { useScrollTop } from "../../hooks/useScrollTop";


const ProjectsPage = () => {
  useScrollTop();
  return (
    <MainPageLayout>
      <Section className="grid grid-cols-1 text-primary gap-8">
      {allProjectsList.map((project)=>{
        return(  <Link to={`${project.id}`} className="cursor-pointer border-themeborder border rounded-md p-5" key={project.id}>
            <div className="flex flex-col gap-4 ">
              <div className="top md:flex items-center gap-4">
                <img src={project.img} alt="project img" className="h-32 w-40" />
  
                <div>
                  <h2 className="title text-lg font-semibold mb-3 md:mt-0 mt-2">
                    {project.title}
                  </h2>
                  <p className="summary text-start">
                   {project.summary}
                    
                  </p>
                </div>
              </div>
           
                  <Pills list={project.ProjectTechStackList}/>
           
            </div>
          </Link>)
      })}
      </Section>
    </MainPageLayout>
  );
};

export default ProjectsPage;
