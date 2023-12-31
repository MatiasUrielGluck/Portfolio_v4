import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { ProjectCard } from "./ProjectCard";

export const Portfolio = ({ projectsList }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      {projectsList.map((project) => {
        if (project) return <ProjectCard key={project.id} project={project} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  /* Mobile First */
  margin-top: 36px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;

  @media only screen and (width > 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (width > 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
