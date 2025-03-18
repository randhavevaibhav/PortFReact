import React from 'react'
import {Section} from '../../common/Section/Section'
import { ProjectList } from '../../Projects/ProjectList'
import { Link } from 'react-router-dom'

export const ProjectsSection = () => {
  return (
    <Section className={`py-6 gap-9`}>
    <h1 className="text-2xl font-bold text-primary">Projects</h1>
    {/* <!-- Projects container --> */}
    <ProjectList />
   
    {/* <!-- Redirects to projects page  --> */}
    <Link
      to={"/projects"}
      className="px-5 py-3 border-themeborder border rounded-md font-bold inline-flex leading-none text-primary bg-background hover:border-primary"
    >
      View all
    </Link>
  </Section>
  )
}
