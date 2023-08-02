import { styled } from "styled-components";
import { InfoContainer } from "../styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import pianoImg from "../assets/images/piano.png";
import runningImg from "../assets/images/running.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export const Hobbies = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme} id="hobbies">
      <InfoContainer theme={theme}>
        <h2>Hobbies</h2>

        <div className="hobby">
          <img src={pianoImg} alt="matias uriel gluck piano" />

          <strong>Piano</strong>
          <p>
            I've been playing it since I was 9 years old.{" "}
            <a href="https://www.youtube.com/channel/UCKbXB3qWadl9qUKiBF6i8Gw">
              <span>Last concert video here</span>
              <FontAwesomeIcon icon={faYoutube} className="yt-icon" />
            </a>
          </p>
        </div>

        <div className="hobby">
          <img src={runningImg} alt="matias uriel gluck running" />

          <strong>Running</strong>
          <p>
            One of the best moments of my week is putting on the shoes and going
            for a run.
          </p>
        </div>
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

  .hobby {
    margin: auto;
    display: grid;
    place-items: center;
    margin-top: 36px;
    width: 60%;

    @media only screen and (width < 568px) {
      width: 100%;
    }

    img {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 12px;
    }

    strong,
    p {
      font-size: 18px;
    }

    strong {
      color: ${(props) => props.theme.text.h2};
    }

    p {
      margin-top: 12px;
      color: ${(props) => props.theme.text.soft};

      a {
        color: ${(props) => props.theme.text.accent};
        text-decoration: none;

        span {
          margin-right: 4px;
        }

        .yt-icon {
          @media only screen and (width < 568px) {
            display: none;
          }
        }
      }
    }
  }
`;
