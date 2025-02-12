import Pills from "../../../components/Pills/Pills";

const techStackList = [
  {
    id: 1,
    name: "Javascript",
  },
  {
    id: 2,
    name: "Typescript",
  },
  {
    id: 3,
    name: "Postgres",
  },
  {
    id: 4,
    name: "NodeJs",
  },
  {
    id: 5,
    name: "React",
  },
  {
    id: 6,
    name: "NextJs",
  },
  {
    id: 7,
    name: "Jest",
  },
  {
    id: 8,
    name: "Git/Github",
  },
  {
    id: 9,
    name: "Tailwind CSS",
  },
];

const TechStack = () => {
  return (
    <>
      <div className="font-bold text-lg capitalize">Stack</div>

      <Pills list={techStackList} />
    </>
  );
};

export default TechStack;
