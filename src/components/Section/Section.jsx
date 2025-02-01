import { twMerge } from "tailwind-merge";


//py-6 gap-9`
const Section = ({ className, children }) => {
  const defaultClasses = `flex items-start flex-col`;
  const overrideClasses = twMerge(defaultClasses, className);

  return <section className={overrideClasses}>{children}</section>;
};

export default Section;
