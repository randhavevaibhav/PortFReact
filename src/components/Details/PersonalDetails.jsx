import { EXPERIENCE_IN_YEARS } from "../../utils/constance";
import { Experience } from "../Experience/Experience";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";

const personalDetailsList = [
  {
    id: 1, 
   icon: <FaBriefcase className="size-10" />,
    text: <Experience/>,
  },
 
  {
    id: 2,
    icon: <BiLogoGmail className="size-10" />,
    url: "mailto:randhavevaibhav3@gmail.com",
    text: "Mail",
  },
  {
    id: 3,
    icon: <FaGithub className="size-10" />,
    url: "https://github.com/randhavevaibhav",
    text: "Github",
  },
  {
    id: 4,
    icon: <FaLinkedin className="size-10" />,
    url: "https://www.linkedin.com/in/vaibhav-randhave-b8b099205/",
    text: "LinkedIn",
  },
   {
    id: 5,
    icon: <MdAccessTimeFilled className="size-10" />,
    text: "(UTC+05:30)",
  },
];

const PersonalDetails = () => {
  return (
    <div className="flex flex-col gap-6 shrink-0 border-themeborder border rounded-xl border-gray-300 p-5 w-full">
    
      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        {personalDetailsList.map((item) => (
          <div key={item.id}>
            {item.url ? (
              <a href={item.url} className="flex flex-col items-center gap-1 group" target="_blank">
                {item.icon}
                <p className="underline underline-offset-4 decoration-2 duration-300 transition-all group-hover:text-blue-500">{item.text}</p>
              </a>
            ) : (
              <div href={item.url} className="flex flex-col items-center gap-1 group cursor-pointer">
                {item.icon}
                 <p className="underline underline-offset-4 decoration-2 duration-300 transition-all group-hover:text-blue-500">{item.text}</p>
              </div>
            
            )}

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalDetails;
