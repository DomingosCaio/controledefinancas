import { useRouter } from "next/router";
import { Button } from "../../../components/Button";
import { Head, Span, Nav } from "./styles";

export const Header = () => {
  const router = useRouter();

  const navigationToExpenseForm = () => {
    router.push("/expanseform");
  };

  return (
    <Head>
      <Span>Expanse Tracker</Span>
      <Nav>
        <Button onClick={navigationToExpenseForm}>Adicionar Nova Conta</Button>
        <Button variant="ghost">Sair</Button>
      </Nav>
    </Head>
  );
};
