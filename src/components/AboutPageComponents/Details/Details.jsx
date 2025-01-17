import Section from "../../Section";
import PersonalDetails from "./PersonalDetails";
import TechStack from "./TechStack";
import Interests from "./Interests";
import Companies from "./Companies";
const Details = () => {
  return (
    <Section className={`py-6 gap-9`}>
      <h2 className="text-2xl font-semibold capitalize">Details</h2>
      <div className="flex sm:flex-row flex-col gap-7">
        <Section className={`flex-1 gap-6 sm:max-w-[21.5rem]`}>
          <PersonalDetails />
          <Section className={` flex-1  gap-6`}>
            <TechStack />
          </Section>
          <Section className={` flex-1 gap-6`}>
            <Interests />
          </Section>
        </Section>
        <Section className="flex flex-1 flex-col gap-6">
          <Companies />
        </Section>
      </div>
    </Section>
  );
};

export default Details;
