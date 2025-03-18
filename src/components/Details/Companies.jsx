import TCSImg from "../../assets/images/tata_consultancy_services_logo.jpeg";
import CouponCabinImg from "../../assets/images/couponcabin_com_logo.webp";

const companyList = [
  {
    id: 1,
    name: "TCS",
    companyImg: TCSImg,
    position: "Actimize and Web Developer",
    dates: "Nov 2021 - Oct 2023 - 1 year 11 months",
    description: `Worked on Actimize technologies (RCM Designer, ActOne Designer) and frontend frameworks (ReactJs, JavaScript, HTML, CSS) to develop quality web solutions. Customized ABC, AFI applications using VTL, XSL, XML. Handled alert workflows, DDQ, and alert views. Enhanced automation test suite with Selenium Java for SIT bug detection. Built a Java Swing app for Excel data manipulation, saving four days of manual work. Managed backend data with Oracle SQL, handled code changes, deployments, and PROD support.`,
  },
  {
    id: 2,
    name: "CouponCabin",
    companyImg: CouponCabinImg,
    position: "JavaScript Developer",
    dates: "March 2024 - present - 11 months",
    description: `Developed and maintained a Chrome extension with React.js, using Node.js for server-side logic. Managed Postgres database views and tables. Ensured seamless UI/UX integration and collaborated in an Agile environment with daily stand-ups and sprint planning.`,
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
