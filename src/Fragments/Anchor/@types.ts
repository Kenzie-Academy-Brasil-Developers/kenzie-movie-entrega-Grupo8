import { NavLinkProps } from "react-router-dom";

export type AnchorProps = NavLinkProps & {
  to: string;
  text: string | undefined;
};
