import { FC } from "react";
import styles from "./layout-block.module.css";
import { calculateBackground } from "./model/calculateBackground";

interface LayoutBlockProps {
  id: string;
  image: string | null;
  content: string;
}

export const LayoutBlock: FC<LayoutBlockProps> = ({ id, image, content }) => {
  const backgroundStyles = calculateBackground(image);

  return (
    <div key={id} className={styles["layout-block"]} style={backgroundStyles}>
      <p>{content}</p>
    </div>
  );
};
