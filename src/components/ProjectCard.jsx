import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { ProjectInfoContainer } from "../styled-components";

export const ProjectCard = ({ project }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <ProjectInfoContainer theme={theme}>
        <h2>{project.name}</h2>
      </ProjectInfoContainer>
    </Container>
  );
};

const Container = styled.div``;
