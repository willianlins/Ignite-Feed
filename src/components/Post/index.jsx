import styles from "./Post.module.css";

import imgPerfil from "../../assets/monkey.jpg";

export function Post({ name, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={imgPerfil} alt="" />
          <div className={styles.authorInfo}>
            <strong>Willian Lins</strong>
            <span>Web Debeloper</span>
          </div>
        </div>
        <time title="03 de abril ás 10:00" dateTime="2024-04-03 10:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Salve!!! 🚀</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          vitae ipsum voluptate error minima provident consectetur laboriosam at
          libero reiciendis! Libero perspiciatis saepe aut, itaque autem nobis
          pariatur eligendi ducimus.
        </p>

        <p>
          <a href="">#Novoprojeto</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
