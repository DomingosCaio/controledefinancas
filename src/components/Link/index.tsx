import NextLink from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

export const Link = ({ children, href, ...props }: Props) => {
  return (
    <NextLink {...props} href={href}>
      {children}
    </NextLink>
  );
};
