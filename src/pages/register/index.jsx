import { Link } from "react-router-dom";
import { StyledRegisterPage } from "./style";
import { Container } from "../../styles/components/container";
import Logo from "../../assets/logo.svg";
import { StyledButton } from "../../styles/components/buttons";
import { FormRegister } from "../../components/form";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <Container>
        <div>
          <img src={Logo} alt="Logo" />
          <Link to="/">
            <StyledButton size="medium" color="disabledTwo">Voltar</StyledButton>
          </Link>
        </div>
        <FormRegister />
      </Container>
    </StyledRegisterPage>
  );
};
