import { FC } from "react";
import styles from "./layout-block.module.css";

interface LayoutBlockProps {
  id: string;
  image: string | null;
  content: string;
}

export const LayoutBlock: FC<LayoutBlockProps> = ({ id, image, content }) => {
  return (
    <div key={id} className={styles.layoutBlock}>
      {image && <img src={image} alt="Block" />}
      <p>{content}</p>
    </div>
  );
};
