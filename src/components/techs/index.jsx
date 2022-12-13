import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Tech } from "./tech";
import { StyledTechs } from "./style"
import { Title2 } from "../../styles/components/typography";
import { StyledButton } from "../../styles/components/buttons";

export const Techs = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledTechs>
      <div>
        <Title2 color="grey-0">Tecnologias</Title2>
        <StyledButton size="medium" color="disabledTwo">+</StyledButton>
      </div>
      <ul>
        {user.techs.map(tech => (
          <Tech key={tech.id} tech={tech}/>
        ))}
      </ul>
    </StyledTechs>
  );
};