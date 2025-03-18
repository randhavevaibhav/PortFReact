import {MainPageLayout} from "../../components/MainPageLayout/MainPageLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { allProjectsList } from "./data";
import {Pills} from "../../components/common/Pills/Pills";
import { useScrollTop } from "../../hooks/useScrollTop";
import ReactMarkdown from "react-markdown";
import "./ProjectPage.css";
import { IoMdArrowRoundBack } from "react-icons/io";
export const ProjectPage = () => {
  useScrollTop();
  const { id } = useParams();
  const navigate = useNavigate();

  const project = allProjectsList.find((project) => {
    return project.id === Number(id);
  });

  const handleGoBack =()=>{
    navigate(-1)
  }
  return (
    <MainPageLayout>
      <article key={project.id} className="flex flex-col gap-4 text-primary">
        <header>
          <button to={"/projects"} className="group flex items-center gap-2 bg-base_surface px-3 py-2 font-semibold rounded-md" onClick={handleGoBack}>
          <IoMdArrowRoundBack className="group-hover:-translate-x-1 duration-300"/>
          <span>Back</span>
          </button>
          <h1 className="title text-4xl font-semibold md:my-4 my-2">{project.title}</h1>
        </header>
        <div className="hero_section flex flex-col gap-2">
          <img src={project.img} alt="project img" className="w-[700px]" />
          <p className="text-lg">Technologies</p>
          <Pills list={project.ProjectTechStackList} />
        </div>
        <div className="fullDesc">
          <h2 className="text-3xl font-bold mb-6 tracking-wider">Description</h2>
          <div className="markdown_container prose prose-strong:text-primary prose-em:text-primary prose-li:text-primary prose-a:text-primary prose-p:text-primary prose-headings:text-primary">
            <ReactMarkdown >{project.fullDesc}</ReactMarkdown>
          </div>
        </div>
      </article>
    </MainPageLayout>
  );
};


