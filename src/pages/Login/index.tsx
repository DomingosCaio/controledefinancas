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

export const Login = () => {
  return (
    <Container>
      <Columns>
        <Aside>
          <img src="/logoLogin.svg" alt="Logo"></img>
        </Aside>
        <Main>
          <Title>Acesse sua conta</Title>
          <Form>
            <InputText label="email" type="email" />
            <InputText label="senha" type="password" />
            <Button>Entrar</Button>
          </Form>
          <Link href="/register">Criar conta</Link>
        </Main>
      </Columns>
    </Container>
  );
};
