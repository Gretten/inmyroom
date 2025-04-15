import { useEffect, useRef, useState } from "react";

export const useTapBarScrollBehavior = () => {
  const handleScroll = () => {};
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
};
