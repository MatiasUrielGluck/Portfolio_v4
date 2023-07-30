import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

import { Education, ProfileContainer, Skills } from "./";

export const Content = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <ProfileContainer />
      <Skills />
      <Education />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;

  @media only screen and (width > 768px) {
    padding: 12px 5%;
  }
`;
