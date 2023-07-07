import { useRef, useEffect, RefObject } from "react";

export const useKeyDown = (keyId: string, callback: (element: HTMLButtonElement | null) => void) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === keyId) {
        if (callback) callback(ref.current);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return ref as RefObject<HTMLButtonElement | null>;
};
