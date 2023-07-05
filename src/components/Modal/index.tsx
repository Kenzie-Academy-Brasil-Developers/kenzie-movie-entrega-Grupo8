import { FormEvent, useContext, useEffect, useRef } from "react";
import { MoviesContext } from "../../providers/MoviesContext/MovieContext";

export const Modal = ({ children }) => {
  const { isOpen, setIsOpen, createReview } = useContext(MoviesContext);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
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


<button onClick={() => setIsOpen(true)}>Abrir modal</button>;

{isOpen ? (
  <Modal>
    <form onSubmit={createReview}>
      <h2>Avaliação</h2>
      <select value="">
        <option value="">Selecione uma nota</option>
        <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
      </select>
      <textarea placeholder="Deixe um comentário"></textarea>
      <button type="submit">Avaliar</button>
    </form>
  </Modal>
) : null;
  function setIsOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  function createReview(_event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  function setIsOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

