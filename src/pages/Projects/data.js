import testIMg from "../../assets/images/test.jpg";

export const allProjectsList = [
  {
    id: 1,
    img: testIMg,
    title: "Blogging website",
    summary: `A Blogging website build using ReactJs for front-end, Nodejs as backend and postgres for database.`,
    ProjectTechStackList: [
      {
        id: 1,
        name: "ReactJs",
      },
      {
        id: 2,
        name: "Tailwind",
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
        name: "Sequalize",
      },
    ],
    fullDesc: `## A blogging website for creating technical or non-technical blogs.
[live website link](https://blog-w-three.vercel.app)
### Features:
1. User can create a blog, edit an existing blog, delete an blog. 
2. Comment on other users blogs,delete his own comment. 
3. User can like blog article. 
4. User can see the stats of published blogs in users dashboard.
5. USer can update his information like email and user name.`,
  },
];
