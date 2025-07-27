import Blog_W from "../../assets/images/BlogW.png";

export const allProjectsList = [
  {
    id: 1,
    img: Blog_W,
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
2. User can comment on other users blogs,delete/edit own comment,can create nested replies. 
3. User can like,bookmark blog article. 
4. User can see the stats (likes,comments) of published blogs in users dashboard.
5. User can view/update his personal info.
6. User can follow/un-follow other user.
7. User can see following user blogs.
8. Implemented Infinite scroll and optimistic updates for like,bookmark post.`,
  },
];
