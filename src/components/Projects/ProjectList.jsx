import React from 'react'
import { allProjectsList } from '../../pages/Projects/data';
import { Project } from './Project';

export const ProjectList = () => {
  return (
    <>
      <div className="flex flex-col gap-6 sm:gap-8 sm:grid sm:grid-cols-2 text-primary">
        {allProjectsList.map((project) => (
          <Project
            key={project.id}
            projectId = {project.id}
            projectImg={project.img}
            projectName={project.title}
            summary={project.summary}
          />
        ))}
      </div>
    </>
  );
};

