import { ButtonHTMLAttributes, ReactNode } from "react";
import tw from "tailwind-styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "ghost";
}

interface StyleProps {
  variant?: "ghost";
}

const Main = `bg-purple-500 hover:bg-purple-400`;
const Ghost = `bg-transparent text-purple-500 hover:bg-purple-100`;

export const MainButton = tw.button<StyleProps>`
  h-10 px-8 text-white font-bold disabled:cursor-not-allowed disabled:bg-gray-500
  ${({ variant }) => (variant === "ghost" ? Ghost : Main)}
`;

export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <MainButton {...props} variant={variant}>
      {children}
    </MainButton>
  );
};
