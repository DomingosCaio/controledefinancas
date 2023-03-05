import { useSelector } from "react-redux";
import { Container } from "../../components/Templates";
import { useLanguages } from "../../Redux/sliceLanguages";
import { Card } from "./Card";
import { Header } from "./Header";
import { Main } from "./styles";

export const Dashboard = () => {
  const languages = useSelector(useLanguages);
  const expense = [
    { id: 1, title: "Netflix", subtitle: "streamming", price: 29.9 },
    { id: 2, title: "Amazon", subtitle: "streamming", price: 9.9 },
    { id: 3, title: "HBO", subtitle: "streamming", price: 19.9 },
    { id: 4, title: "OIFibra", subtitle: "WEB", price: 99.9 },
  ];

  return (
    <Container>
      <Header />
      <Main>
        {languages.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.expense}
              subtitle={item.type}
              price={item.value}
            />
          );
        })}
      </Main>
    </Container>
  );
};
