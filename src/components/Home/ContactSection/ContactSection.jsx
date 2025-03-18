import React from 'react'
import {Section} from '../../common/Section/Section'

export const ContactSection = () => {
  return (
    <Section className={`py-6 gap-4`}>
    <h2 className="text-2xl font-bold text-primary">Connect</h2>
    <p className="text-primary">
      Email me at&nbsp;:&nbsp;
      <a href="#" className="underline text-primary">
        randhavevaibhav3@gmail.com
      </a>
    </p>
    <a href="#" className="underline text-primary">
      Download Resume
    </a>
  </Section>
  )
}
