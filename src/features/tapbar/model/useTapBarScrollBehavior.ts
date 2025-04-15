import { useEffect } from "react";
import { useRAFCallback } from "@shared/utils/useRAFCallback";

export const useTapBarScrollBehavior = () => {
  const onScroll = useRAFCallback(() => {
    console.log("Scroll Y:", window.scrollY);
  });

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
};
