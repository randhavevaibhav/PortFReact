const ResumeDownLoadLink = `https://drive.google.com/file/d/1DZzoiThbePmqU-0Z6_v1ZrVYfSM9md1g/view?usp=sharing`;


export const ResumeDownLoadBtn = () => {
  return (
    <a
      href={ResumeDownLoadLink}
      className="border border-themeborder px-2 py-1 rounded bg-background text-primary"
      target="_blank"
    >
      Download Resume
    </a>
  );
};
