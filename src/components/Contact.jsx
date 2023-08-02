import { styled } from "styled-components";
import { InfoContainer } from "../styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";

export const Contact = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme} id="contact">
      <InfoContainer theme={theme}>
        <h2>Contact</h2>
        <div className="contact-methods">
          <a href="mailto:matiasugluck@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/mat%C3%ADas-uriel-gluck/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a href="https://github.com/MatiasUrielGluck" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} size="3x" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCKbXB3qWadl9qUKiBF6i8Gw"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutubeSquare} size="3x" />
          </a>
          <a
            href="https://www.instagram.com/matias_uriel_gluck/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
          </a>
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
    gap: 26px;

    @media only screen and (width < 390px) {
      gap: 18px;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.text.primary};
    }
  }
`;
