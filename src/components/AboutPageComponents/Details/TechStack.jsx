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

      <div className="flex flex-wrap gap-3">
        {techStackList.map((item) => (
          <div
            key={item.id}
            className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50 capitalize"
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
