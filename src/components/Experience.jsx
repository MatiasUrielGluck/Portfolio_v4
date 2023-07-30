import { styled } from "styled-components";
import { InfoContainer } from "../styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Experience = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <InfoContainer theme={theme}>
        <h2>Experience</h2>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  h2 {
    color: ${(props) => props.theme.text.accent};
    text-align: center;
    font-weight: 500;
  }
`;
