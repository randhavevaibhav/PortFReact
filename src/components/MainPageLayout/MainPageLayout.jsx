import { twMerge } from "tailwind-merge";

export const MainPageLayout = ({ children,className }) => {
  const defaultClasses = `mx-auto max-w-5xl sm:px-8 px-4`;
  const overrideClasses = twMerge(defaultClasses, className);

  return <>

    <main className={overrideClasses}>{children}</main>
  </>;
};


