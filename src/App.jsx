import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            name="Willian Lins"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quam vitae impedit. Omnis inventore quibusdam quam corrupti quasi nesciunt harum! Laborum esse corporis facilis quasi asperiores blanditiis ad, eum assumenda!"
          />
          <Post
            name="Uilhã Araujo"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quam vitae impedit. Omnis inventore quibusdam quam corrupti quasi nesciunt harum! Laborum esse corporis facilis quasi asperiores blanditiis ad, eum assumenda!"
          />
        </main>
      </div>
    </>
  );
}
