import { Link } from "react-router-dom";
import HomeSVG from "./HomeSVG";
import IdeaSVG from "./IdeaSVG";
import PersonSVG from "./PersonSVG";
import PhoneSVG from "./PhoneSVG";



const bottomNavList = [
    {
        id: 1,
        text: "Home",
        icon: <HomeSVG width="20px"/>,
        linkTo: "/"
    },
    {
        id: 2,
        text: "Projects",
        icon: <IdeaSVG width="20px"/>,
        linkTo: "#"
    },
    {
        id: 3,
        text: "About",
        icon: <PersonSVG width="20px"/>,
        linkTo: "/about"
    },
    {
        id: 4,
        text: "Contact",
        icon: <PhoneSVG width="20px"/>,
        linkTo: "#"
    }
]


const BottomNav = () => {
    return (<div className="md:hidden h-[50px] items-center md:gap-6 gap-4 flex fixed bottom-0 w-full justify-around backdrop-blur">
        {bottomNavList.map((item) => {
            return (
                <Link to={item.linkTo} className="text-xs text-primary font-bold flex flex-col items-center" key={item.id}>
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                </Link>

            )
        })}
    </div>
    )
}

export default BottomNav;