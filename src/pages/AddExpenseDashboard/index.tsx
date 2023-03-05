import { useState } from "react";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { Link } from "../../components/Link";
import {
  Container,
  Columns,
  Aside,
  Main,
  Title,
  Form,
} from "../../components/Templates";

export const ExpenseForm = () => {
  // const [expense, setExpense] = useState("");
  // const [type, setType] = useState("");
  // const [cost, setCost] = useState("");
  return (
    <Container>
      <Columns>
        <Aside>
          <img src="/dazzle-line-money-rise.gif" alt="Logo"></img>
        </Aside>
        <Main>
          <Title>Cadastre sua despesa</Title>
          <Form>
            <InputText label="Despesa" type="text" />
            <InputText label="Categoria" type="text" />
            <InputText label="Valor" type="number" />
            <Button>Cadastrar</Button>
          </Form>
          <Link href="/dashboard">Dashboard</Link>
        </Main>
      </Columns>
    </Container>
  );
};
