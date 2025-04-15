import { useEffect, useRef, useState } from "react";
import { useRAFCallback } from "@shared/utils/useRAFCallback";

/**
 * Управляет отображением тапбара в зависимости от скролла страницы.
 * Опциональные параметры:
 * @param threshold: пороговое значение для скрытия (по умолчанию 200px)
 * @param delay: задержка перед повторным отображением (по умолчанию 1000ms)
 * @returns флаг состояния видимости тапбара isHidden
 */
export const useToggleTapBar = (threshold = 200, delay = 1000) => {
  const prevScrollYRef = useRef(window.scrollY || 0);
  const scrollTimeoutRef = useRef<number | null>(null);
  const [isHidden, setIsHidden] = useState(false);

  const onScroll = useRAFCallback(() => {
    if (scrollTimeoutRef.current !== null) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const currentY = Math.round(window.scrollY);
    const isScrollDown = currentY > prevScrollYRef.current;

    if (isScrollDown && currentY > prevScrollYRef.current + threshold) {
      setIsHidden(true);
      prevScrollYRef.current = currentY;
    }

    if (!isScrollDown) {
      setIsHidden(false);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      prevScrollYRef.current = currentY;
      setIsHidden(false);
    }, delay);
  });

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (prevScrollYRef.current !== null) {
        clearTimeout(prevScrollYRef.current);
      }
    };
  }, [onScroll]);

  return isHidden;
};
