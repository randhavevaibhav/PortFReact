import React from "react";
import { MainPageLayout } from "../../components/MainPageLayout/MainPageLayout";
import { Section } from "../../components/common/Section/Section";
import { ContactForm } from "../../components/Contact/ContactForm";

import "./ContactPage.css";
import { useScrollTop } from "../../hooks/useScrollTop";

export const ContactPage = () => {
  useScrollTop();

  return (
    <MainPageLayout className="max-w-6xl lg:mt-4 mt-10 text-primary">
      <Section
        className={`contact_section_bg grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4`}
        id="contact_form"
      >
        <ContactForm />
      </Section>
    </MainPageLayout>
  );
};
