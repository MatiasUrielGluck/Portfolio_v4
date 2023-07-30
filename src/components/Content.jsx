import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

import { Education, Experience, Hobbies, ProfileContainer, Skills } from "./";

export const Content = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <ProfileContainer />
      <Skills />
      <Education />
      <div className="dual-section">
        <Experience />
        <Hobbies />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;

  @media only screen and (width > 768px) {
    padding: 12px 5%;
  }

  .dual-section {
    margin-top: 36px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 36px;

    @media only screen and (width > 920px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
