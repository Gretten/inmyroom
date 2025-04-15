import React from "react";
// import useTapBarScrollBehavior from './useTapBarScrollBehavior';
import styles from "./tapbar.module.css";
import { IconButton } from "./ui/icon-button";
import ShareIcon from "../../shared/ui/icons/share.svg?react";
import CommentIcon from "@shared/ui/icons/comment.svg?react";
import FavoriteIcon from "@shared/ui/icons/heart.svg?react";
import ScrollTopIcon from "@shared/ui/icons/scroll-top.svg?react";
import { useToggleTapBar } from "./model/useToggleTapBar";
import { scrollToTop } from "@shared/utils/scrollTop";
import { sharePage } from "@shared/utils/sharePage";

export const TapBar: React.FC = () => {
  const [likes, setLikes] = React.useState(0);
  const [comments, setComments] = React.useState(0);
  const isHidden = useToggleTapBar();

  const tapbarStyles = `${styles.tapbar} ${isHidden ? `${styles.hidden}` : ""}`;

  const onScrollTop = () => {
    scrollToTop();
  };

  const onShare = async () => {
    await sharePage();
  };

  const onComment = () => {
    console.log("Показать комментарии");
  };

  const onFavorite = () => {
    // Логика для избранного

    console.log("Добавить в избранное");
  };

  return (
    <div className={tapbarStyles}>
      <IconButton icon={<ScrollTopIcon />} onClick={() => onScrollTop()} />
      <IconButton icon={<ShareIcon />} onClick={() => onShare()} />
      <IconButton icon={<CommentIcon />} onClick={() => {}} />
      <IconButton icon={<FavoriteIcon />} onClick={() => {}} />
    </div>
  );
};
