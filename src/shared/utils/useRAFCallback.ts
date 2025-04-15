import { useRef, useEffect, useCallback } from "react";

/**
 * Хук изолирует логику работы с requestAnimationFrame
 * @param fn - функция, которая будет вызвана в следующем кадре анимации
 */
export const useRAFCallback = (fn: () => void) => {
  const frame = useRef<number | null>(null);

  const cancel = () => {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
  };

  const rafCallback = useCallback(() => {
    cancel();
    frame.current = requestAnimationFrame(() => {
      fn();
      frame.current = null;
    });
  }, [fn]);

  useEffect(() => cancel, []);

  return rafCallback;
};
