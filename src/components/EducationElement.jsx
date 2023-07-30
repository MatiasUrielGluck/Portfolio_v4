import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

export const EducationElement = ({ educationTitle, educationDesc }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <p>{educationTitle}</p>
      <p>{educationDesc}</p>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 8px;
  p {
    font-size: 18px;
  }

  p:first-of-type {
    font-weight: 600;
    color: ${(props) => props.theme.text.h2};
  }

  p:last-of-type {
    color: ${(props) => props.theme.text.soft};
  }
`;
