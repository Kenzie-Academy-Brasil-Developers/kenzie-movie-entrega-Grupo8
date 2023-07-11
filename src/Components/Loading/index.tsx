import { StyledMain } from "./styles";

export const Loading = () => {
  return (
    <StyledMain>
      <section>
      <div className="hand">
        <span className="finger thumb"></span>
        <span className="finger"></span>
        <span className="finger"></span>
        <span className="finger"></span>
        <span className="finger"></span>
        <span className="palm"></span>
      </div>

      </section>
      <div>
        <p>Carregando...</p>
      </div>
    </StyledMain>
  );
};
