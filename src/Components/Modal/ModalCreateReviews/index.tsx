import { ReactNode, useContext, useRef } from "react";
import { MoviesContext } from "../../../providers/MoviesContext/MovieContext";
import { useKeyDown } from "../../Hooks/useKeyDown";
import { useOutClick } from "../../Hooks/useOutClick";


export const Modal = ({ children }: { children: ReactNode }) => {
  const { setIsOpen } = useContext(MoviesContext);
  

  const modalRef = useOutClick(() => {
    handleCreateClose();
  });

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleCreateClose = () => {
    setIsOpen(false);
  };

  useKeyDown("Escape", () => {
    handleCreateClose();
  });

  return (
    <div className="fixed flex items-center justify-center inset-0 w-full h-full bg-black bg-opacity-50 " role="dialog">
      <div className="flex flex-col relative w-full bg-neutral-900 p-8 max-w-xl " ref={modalRef}>
        <button className="font-bold absolute top-4 right-4" ref={buttonRef} onClick={handleCreateClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
