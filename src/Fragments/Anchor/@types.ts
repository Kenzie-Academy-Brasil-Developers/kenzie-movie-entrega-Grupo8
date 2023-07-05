import { NavLinkProps } from "react-router-dom";

export type AnchorProps = NavLinkProps & {
  to: to & string;
  text: string | undefined;
};
