import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputText = ({ label, ...props }: Props) => {
  return (
    <label className="flex flex-col w-full">
      <span>{label}</span>
      <input {...props} className="border border-gray-200 px-4 h-10" />
    </label>
  );
};
