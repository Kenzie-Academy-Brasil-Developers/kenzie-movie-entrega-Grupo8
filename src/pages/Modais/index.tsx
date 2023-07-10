import { ReactNode, useContext, useRef } from "react";
import { MoviesContext } from "../../providers/MoviesContext/MovieContext";
import { useKeyDown } from "../../Components/Hooks/useKeyDown";
import { useOutClick } from "../../Components/Hooks/useOutClick";

export const Modal = ({ children }: { children: ReactNode }) => {
  const { setIsOpen } = useContext(MoviesContext);

  const modalRef = useOutClick(() => {
    handleClose();
  });

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  useKeyDown("Escape", () => {
    handleClose();
  });

  return (
    <div role="dialog">
      <div ref={modalRef}>
        <button ref={buttonRef} onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
