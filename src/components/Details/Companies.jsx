import TCSImg from "../../assets/images/tata_consultancy_services_logo.jpeg";
import CouponCabinImg from "../../assets/images/couponcabin_com_logo.webp";

const companyList = [
  {
    id: 1,
    name: "TCS",
    companyImg: TCSImg,
    position: "Actimize and Web Developer",
    dates: "Nov 2021 - Oct 2023 - 1 year 11 months",
    description:
      `From resume`,
  },
  {
    id: 2,
    name: "CouponCabin",
    companyImg: CouponCabinImg,
    position: "JavaScript Developer",
    dates: "March 2024 - present - 11 months",
    description:
      "From resume",
  },
];

const Companies = () => {
  return (
    <>
      <div className="text-lg font-semibold">Experience</div>

      {companyList.map((company) => (
        <div className="flex flex-col gap-4" key={company.id}>
          {/* <!-- title --> */}
          <div className="flex items-center gap-4">
            {/* <!-- company image --> */}
            <div className="h-10 w-10 rounded border">
              <img
                src={company.companyImg}
                width="60"
                loading="lazy"
                alt="company image"
              />
            </div>
            {/* <!-- company image --> */}

            {/* <!-- position/company name --> */}
            <div>
              {/* <!-- position --> */}
              <h2 className="text-lg font-semibold">{company.position}</h2>
              {/* <!-- position --> */}
              {/* <!-- company name --> */}
              <div className="text-sm font-bold tracking-wide">
                {company.name}
              </div>
              {/* <!-- company name --> */}
            </div>
            {/* <!-- position/company name --> */}
          </div>
          {/* <!-- title --> */}
          {/* <!-- dates --> */}
          <div className="text-sm text-gray-400">{company.dates}</div>
          {/* <!-- dates --> */}
          {/* <!-- description --> */}
          <div className="text-sm">{company.description}</div>
          {/* <!-- description --> */}
        </div>
      ))}
    </>
  );
};

export default Companies;
