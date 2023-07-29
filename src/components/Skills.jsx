import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { InfoContainer } from "../styled-components";
import { Skill } from "./";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export const Skills = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <div className="skills-container">
        <InfoContainer theme={theme}>
          <h2>Frontend</h2>
          <div className="skills-list">
            <Skill icon={faReact} text={"React"} />
            <Skill icon={faReact} text={"React"} />
            <Skill icon={faReact} text={"React"} />
            <Skill icon={faReact} text={"React"} />
            <Skill icon={faReact} text={"React"} />
          </div>
        </InfoContainer>
      </div>
      <div className="skills-container">
        <InfoContainer theme={theme}>
          <h2>Backend</h2>
          <div className="skills-list">
            <Skill icon={faReact} text={"React"} />
            <Skill icon={faReact} text={"React"} />
            <Skill icon={faReact} text={"React"} />
            <Skill icon={faReact} text={"React"} />
            <Skill icon={faReact} text={"React"} />
          </div>
        </InfoContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;

  @media only screen and (width > 780px) {
    grid-template-columns: 1fr 1fr;
  }

  .skills-container {
    h2 {
      font-weight: 500;
      color: ${(props) => props.theme.text.h2};
    }

    .skills-list {
      margin-top: 24px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      row-gap: 12px;
      place-items: center;
    }
  }
`;
