import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

import { ProfileContainer } from "./";

export const Content = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <ProfileContainer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 16px;

  @media only screen and (width > 768px) {
    padding: 12px 5%;
  }
`;
