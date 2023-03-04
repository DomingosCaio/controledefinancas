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

export const Register = () => {
  return (
    <Container>
      <Columns>
        <Aside>
          <img src="/createAccount.svg" alt="Create Account Image"></img>
        </Aside>
        <Main>
          <Title>Crie sua conta</Title>
          <Form>
            <InputText label="email" type="email" />
            <InputText label="senha" type="password" />
            <Button>Criar</Button>
          </Form>
          <Link href="/">Já possuo uma conta</Link>
        </Main>
      </Columns>
    </Container>
  );
};
