import { NavLink } from "react-router-dom";
import { AnchorProps } from "./@types";

export const Anchor = ({ to, text, ...rest }: AnchorProps) => {
  return (
    <div>
      <NavLink to={to} {...rest}>
        {text}
      </NavLink>
    </div>
  );
};
