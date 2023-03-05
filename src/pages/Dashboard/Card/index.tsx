import { Button } from "../../../components/Button";
import { Article, Service, ServiceType, ServiceValue } from "./styles";

export const Card = ({ title, subtitle, price }) => {
  return (
    <Article>
      <Button className="absolute top-0 left-24" variant="ghost">
        Editar
      </Button>
      <Button className="absolute top-0 right-0" variant="ghost">
        Excluir
      </Button>
      <Service>{title}</Service>
      <ServiceType>{subtitle}</ServiceType>
      <ServiceValue>{price}</ServiceValue>
    </Article>
  );
};
