import { ReactNode, useContext, useEffect, useRef } from "react";
import { MoviesContext } from "../../providers/MoviesContext/MovieContext";

export const Modal = ({ children }: { children: ReactNode }) => {
  const { setIsOpen } = useContext(MoviesContext);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutClick = (event: MouseEvent) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeydown = (event: { key: string; }) => {
      if (event.key === "Escape") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div role="dialog">
      <div ref={modalRef}>
        <button ref={buttonRef} onClick={() => setIsOpen(false)}>
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};
