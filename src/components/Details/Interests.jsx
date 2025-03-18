import {Pills} from "../common/Pills/Pills";

const interestsList = [
  {
    id: 1,
    name: "Drawing",
  },
  {
    id: 2,
    name: "Anime",
  },
];

const Interests = () => {
  return (
    <>
      <div className="font-bold text-lg capitalize">Interests</div>

     
       <Pills list={interestsList}/>
    
    </>
  );
};

export default Interests;
