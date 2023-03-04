import tw from "tailwind-styled-components";

export const Container = tw.div`
    w-screen h-screen bg-gray-50 flex justify-center
`;

export const Columns = tw.div`
    w-full h-full max-w-screen-lg grid grid-cols-2
`;

export const Aside = tw.aside`
    flex justify-center items-center
`;

export const Main = tw.main`
    flex flex-col justify-center items-center gap-16
`;

export const Title = tw.h1`
    font-bold text-3xl
`;

export const Form = tw.h1`
    flex flex-col gap-4 w-full max-w-xs
`;
