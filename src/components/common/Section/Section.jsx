import { twMerge } from "tailwind-merge";


//py-6 gap-9`
export const Section = (props) => {
  const{children,className,...rest} = props
  const defaultClasses = `flex items-start flex-col`;
  const overrideClasses = twMerge(defaultClasses, className);

  return <section className={overrideClasses} {...rest}>{children}</section>;
};


