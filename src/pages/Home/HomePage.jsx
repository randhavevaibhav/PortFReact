import {MainPageLayout} from "../../components/MainPageLayout/MainPageLayout";
import { useScrollTop } from "../../hooks/useScrollTop";
import { ProjectsSection } from "../../components/Home/ProjectsSection/ProjectsSection";
import { ContactSection } from "../../components/Home/ContactSection/ContactSection";
import { AboutMeSection } from "../../components/Home/AboutMeSection/AboutMeSection";
export const HomePage = () => {
  useScrollTop();

  return (
    <>
      <MainPageLayout>
        {/* <!-- Hero --> */}

        <AboutMeSection />

        {/* <!-- Projects --> */}
        <ProjectsSection />

        {/* <!-- Contact --> */}
        <ContactSection />
      </MainPageLayout>
    </>
  );
};


