import React from "react";
import { MainPageLayout } from "../../components/MainPageLayout/MainPageLayout";
import { Section } from "../../components/common/Section/Section";
import { ContactForm } from "../../components/Contact/ContactForm";
import { ConntactAvatar } from "../../components/Contact/ConntactAvatar";
import {useScrollTop} from "../../hooks/useScrollTop"
export const ContactPage = () => {
  useScrollTop();

  return (
    <MainPageLayout className="max-w-6xl lg:mt-16 text-primary">
      <Section className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-2">
        <ContactForm />
        <ConntactAvatar />
      </Section>
    </MainPageLayout>
  );
};
