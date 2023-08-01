import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { ProjectInfoContainer } from "../styled-components";

export const Portfolio = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <ProjectInfoContainer theme={theme}>
        <h2>Portfolio Project</h2>
      </ProjectInfoContainer>
      <ProjectInfoContainer theme={theme}>
        <h2>Portfolio Project</h2>
      </ProjectInfoContainer>
      <ProjectInfoContainer theme={theme}>
        <h2>Portfolio Project</h2>
      </ProjectInfoContainer>
      <ProjectInfoContainer theme={theme}>
        <h2>Portfolio Project</h2>
      </ProjectInfoContainer>
      <ProjectInfoContainer theme={theme}>
        <h2>Portfolio Project</h2>
      </ProjectInfoContainer>
      <ProjectInfoContainer theme={theme}>
        <h2>Portfolio Project</h2>
      </ProjectInfoContainer>
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

  @media only screen and (width > 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
