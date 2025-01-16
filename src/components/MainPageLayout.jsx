import Navbar from "./Navbar";

const MainPageLayout = ({ children }) => {
  return <>
  <Navbar/>
  <main className=" mx-auto max-w-5xl sm:px-8 px-4">{children}</main>
  </>;
};

export default MainPageLayout;
