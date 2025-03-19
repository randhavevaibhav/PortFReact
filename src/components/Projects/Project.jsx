import React from 'react'
import { Link } from 'react-router-dom';

export const Project = ({ projectId,projectImg, projectName, summary }) => {
  return (
    <>
      <Link to={`/projects/${projectId}`} className="border border-themeborder rounded-xl">
        <div className="rounded-t-[inherit]">
          <img
            src={projectImg}
            alt="project 1 image"
            className="w-[32rem] rounded-[inherit]"
          />
        </div>
        <div className="flex flex-col gap-2 p-5">
          <h1 className="md:text-3xl text-2xl font-bold mb-3 capitalize">{projectName}</h1>
          <p  className="text-sm md:text-base">{summary}</p>
        </div>
      </Link>
    </>
  );
};
