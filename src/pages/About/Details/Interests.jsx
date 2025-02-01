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

      <div className="flex flex-wrap gap-3">
        {interestsList.map((item) => (
          <div
            key={item.id}
            className="inline-flex items-center rounded-sm text-sm px-2 py-1 border hover:bg-gray-50"
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Interests;
