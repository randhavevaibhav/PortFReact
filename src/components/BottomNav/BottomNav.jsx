import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

const bottomNavList = [
  {
    id: 1,
    text: "Home",
    icon: (
      <RiHome2Line size={"1.5rem"} className="dark:text-white text-black" />
    ),
    linkTo: "/",
  },
  {
    id: 2,
    text: "Projects",
    icon: (
      <FaRegLightbulb size={"1.5rem"} className="dark:text-white text-black" />
    ),
    linkTo: "/projects",
  },
  {
    id: 3,
    text: "About",
    icon: (
      <IoPersonOutline size={"1.5rem"} className="dark:text-white text-black" />
    ),
    linkTo: "/about",
  },
  {
    id: 4,
    text: "Contact",
    icon: <FiPhone size={"1.5rem"} className="dark:text-white text-black" />,
    linkTo: "/contact",
  },
];

const BottomNav = () => {
  return (
    <div className="lg:hidden h-[50px] items-center md:gap-6 gap-4 flex fixed bottom-0 w-full justify-around backdrop-blur">
      {bottomNavList.map((item) => {
        return (
          <Link
            to={item.linkTo}
            className="text-xs text-primary font-bold flex flex-col items-center"
            key={item.id}
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
