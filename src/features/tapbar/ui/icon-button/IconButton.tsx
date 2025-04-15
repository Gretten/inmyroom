import { FC } from "react";
import styles from "./styles.module.css";

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({ onClick, icon }) => {
  return (
    <button className={styles["icon-button"]} onClick={onClick}>
      {icon}
    </button>
  );
};
