import React from "react";
// import useTapBarScrollBehavior from './useTapBarScrollBehavior';
import styles from "./tapbar.module.css";
import { IconButton } from "./ui/icon-button";
import ShareIcon from "../../shared/ui/icons/share.svg?react";
import CommentIcon from "@shared/ui/icons/comment.svg?react";
import LikeIcon from "@shared/ui/icons/heart.svg?react";
import ScrollTopIcon from "@shared/ui/icons/scroll-top.svg?react";
import { useToggleTapBar } from "./model/useToggleTapBar";
import { scrollToTop } from "@shared/utils/scrollTop";
import { sharePage } from "@shared/utils/sharePage";
import { ButtonWithCounter } from "./ui/button-with-counter";

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
    setComments((prevCount) => prevCount + 1);
  };

  const onLike = () => {
    setLikes((prevCount) => prevCount + 1);
  };

  return (
    <div className={tapbarStyles}>
      <IconButton icon={<ScrollTopIcon />} onClick={onScrollTop} />
      <IconButton icon={<ShareIcon />} onClick={onShare} />
      <ButtonWithCounter
        icon={<CommentIcon />}
        onClick={onComment}
        counter={comments}
      />
      <ButtonWithCounter icon={<LikeIcon />} onClick={onLike} counter={likes} />
    </div>
  );
};
