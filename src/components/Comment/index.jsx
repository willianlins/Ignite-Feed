import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";
import imgPerfil from "../../assets/noimg.jpg";
import { ThumbsDown, ThumbsUp, Trash } from "phosphor-react";

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={imgPerfil} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>User 1</strong>
              <time title="03 de abril ás 10:00" dateTime="2024-04-03 10:00:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Apludir<span>28</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
