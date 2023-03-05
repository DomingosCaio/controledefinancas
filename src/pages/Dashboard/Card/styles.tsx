import tw from "tailwind-styled-components";

export const Article = tw.article`
    bg-white p-4 shadow-md h-40 relative flex justify-between flex-col gap-2
`;

export const Service = tw.h2`
    font-bold text-xl
`;

export const ServiceType = tw.p`
    px-2 h-8 flex justify-center items-center text-purple-900 bg-purple-100 self-start rounded-full
`;

export const ServiceValue = tw.p`
    font-medium
`;
