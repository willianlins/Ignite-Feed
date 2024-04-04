import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

import avatarImg from "./assets/user_3.jpeg";
import avatarImg2 from "./assets/user_2.jpg";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: avatarImg,
      name: "Maria DB",
      role: "Adiminstradora de Banco de Dados",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋," },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quam vitae impedit. Omnis inventore quibusdam quam corrupti quasi nesciunt harum! Laborum esse corporis facilis quasi asperiores blanditiis ad, eum assumenda!",
      },
      { type: "link", content: "john.doe/webDev" },
    ],
    publishedhAt: new Date("2024-04-04 10:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: avatarImg2,
      name: "Uilha Araujo",
      role: "Web Develop",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋," },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quam vitae impedit. Omnis inventore quibusdam quam corrupti quasi nesciunt harum! Laborum esse corporis facilis quasi asperiores blanditiis ad, eum assumenda!",
      },
      { type: "link", content: "john.doe/webDev" },
    ],
    publishedhAt: new Date("2024-04-03 10:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedhAt={post.publishedhAt}
              />
            )
          })}
        </main>
      </div>
    </>
  );
}
