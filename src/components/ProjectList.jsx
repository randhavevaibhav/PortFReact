import projectImg from "../assets/images/project_1.webp";

const projectList = [
  {
    id: 1,
    projectImg: projectImg,
    projectName: "Project 1",
    projectDesc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur harum atque praesentium quibusdam explicabo dolor,
                  animi debitis iure, possimus nemo itaque repellat vero
                  temporibus. Quisquam vel adipisci laborum distinctio ipsa?
                  Amet aliquid accusamus expedita nihil? Iure eveniet dolor
                  perferendis recusandae tenetur amet hic incidunt maiores, esse
                  ad nam repudiandae deserunt facilis molestiae dolorem
                  reiciendis consequuntur eligendi. Ullam voluptatibus nihil
                  quae.`,
  },
  {
    id: 2,
    projectImg: projectImg,
    projectName: "Project 2",
    projectDesc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur harum atque praesentium quibusdam explicabo dolor,
                  animi debitis iure, possimus nemo itaque repellat vero
                  temporibus. Quisquam vel adipisci laborum distinctio ipsa?
                  Amet aliquid accusamus expedita nihil? Iure eveniet dolor
                  perferendis recusandae tenetur amet hic incidunt maiores, esse
                  ad nam repudiandae deserunt facilis molestiae dolorem
                  reiciendis consequuntur eligendi. Ullam voluptatibus nihil
                  quae.`,
  },
];

const ProjectContainer = ({projectImg,projectName,projectDesc})=>{
    return(<>
    <a href="#" className="border border-black rounded-xl" >
              <div className="rounded-t-[inherit]">
                <img
                  src={projectImg}
                  alt="project 1 image"
                  className="w-[32rem] rounded-[inherit]"
                />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h1 className="text-lg font-bold mb-3">{projectName}</h1>
                <p>
                 {projectDesc}
                </p>
              </div>
            </a>
    
    </>)
}

const ProjectList = ()=>{
return(<>

  <div className="flex flex-col gap-6 sm:gap-8 sm:grid sm:grid-cols-2 text-primary">
            {projectList.map((project) => (
              <ProjectContainer
                key={project.id}
                projectImg={project.projectImg}
                projectName={project.projectName}
                projectDesc={project.projectDesc}
              />
            ))}
          
          </div>



 

</>)
}


export default ProjectList;