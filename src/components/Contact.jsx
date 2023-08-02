import { styled } from "styled-components";
import { InfoContainer } from "../styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";

export const Contact = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme} id="contact">
      <InfoContainer theme={theme}>
        <h2>Contact</h2>
        <div className="contact-methods">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
          <FontAwesomeIcon icon={faGithubSquare} size="3x" />
          <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
        </div>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  h2 {
    text-align: center;
    color: ${(props) => props.theme.text.accent};
    font-weight: 500;
    margin-bottom: 24px;
  }

  .contact-methods {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 36px;
    color: ${(props) => props.theme.text.primary};
  }
`;
