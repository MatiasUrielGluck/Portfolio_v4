import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { InfoContainer } from "../styled-components";
import { Skill } from "./";
import { skillsListFrontend, skillsListBackend } from "../data/skills";

export const Skills = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme} id="skills">
      <div className="skills-container">
        <InfoContainer theme={theme}>
          <h2>Frontend Skills</h2>
          <div className="skills-list">
            {skillsListFrontend.map((skill) => (
              <Skill key={skill.id} text={skill.text} icon={skill.icon} />
            ))}
          </div>
        </InfoContainer>
      </div>
      <div className="skills-container">
        <InfoContainer theme={theme}>
          <h2>Backend Skills</h2>
          <div className="skills-list">
            {skillsListBackend.map((skill) => (
              <Skill key={skill.id} text={skill.text} icon={skill.icon} />
            ))}
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
      color: ${(props) => props.theme.text.accent};
      text-align: center;
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
