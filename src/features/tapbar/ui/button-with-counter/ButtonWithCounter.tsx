import { FC } from "react";
import styles from "./styles.module.css";
import { IconButton } from "../icon-button";

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  counter: number;
}

export const ButtonWithCounter: FC<IconButtonProps> = ({
  onClick,
  icon,
  counter,
}) => {
  return (
    <div className={styles["with-counter"]}>
      <IconButton icon={icon} onClick={onClick} />
      <span className={styles.counter}>{counter}</span>
    </div>
  );
};
