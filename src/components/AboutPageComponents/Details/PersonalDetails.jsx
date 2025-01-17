const personalDetailsList = [
  {
    id: 1,
    title: "Experience",
    details: "3 years",
  },
  {
    id: 2,
    title: "Time zone",
    details: "IST (UTC+05:30)",
  },
  {
    id: 3,
    title: "Email",
    details: "randhavevaibhav3@gmail.com",
  },
  {
    id: 4,
    title: "GitHub",
    details: "randhavevaibhav",
  },
  {
    id: 5,
    title: "LinkedIn",
    details: "vaibhav-randhave-b8b099205",
  },
];

const PersonalDetails = () => {
  return (
    <div className="flex flex-col gap-6 shrink-0 border rounded-xl border-gray-300 p-5 w-full">
      {personalDetailsList.map((item) => (
        <div key={item.id}>
          <div className="mb-1 text-sm">{item.title}</div>
          <div className="font-semibold">{item.details}</div>
        </div>
      ))}
    </div>
  );
};

export default PersonalDetails;
