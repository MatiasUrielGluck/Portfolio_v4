import { styled } from "styled-components";
import { FullWidthInfoContainer } from "../styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import abbLogo from "../assets/images/abb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faHardDrive } from "@fortawesome/free-regular-svg-icons";

export const Experience = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme} id="experience">
      <FullWidthInfoContainer theme={theme}>
        <h2>Experience</h2>

        <div className="abb">
          <div className="abb-desc">
            <strong>Fullstack Developer Intern</strong>
            <p>ABB, since January 2023</p>
          </div>
          <div className="abb-img">
            <img src={abbLogo} alt="abb matias uriel gluck" />
          </div>
        </div>

        <div className="technician">
          <strong>Hardware and Software Technician</strong>
          <p>Independent, since 2018</p>

          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faWindows} />
              </span>
              Operating systems and programs installation.
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faStethoscope} />
              </span>
              Computers and cell phones reparation.
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faHardDrive} />
              </span>
              Data recovery using Linux.
            </li>
          </ul>
        </div>

        <a href="mailto:matiasugluck@gmail.com">
          <div className="contact-btn">
            <p>Contact me</p>
          </div>
        </a>
      </FullWidthInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  a {
    text-decoration: none;
  }

  h2 {
    color: ${(props) => props.theme.text.accent};
    text-align: center;
    font-weight: 500;
  }

  .abb {
    padding: 36px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    border-bottom: 1px solid ${(props) => props.theme.text.soft};

    .abb-desc {
      justify-self: start;

      strong,
      p {
        font-size: 18px;
      }

      strong {
        color: ${(props) => props.theme.text.h2};
      }

      p {
        margin-top: 4px;
        color: ${(props) => props.theme.text.soft};
      }
    }

    .abb-img {
      img {
        width: 100%;
        max-width: 100px;
      }
    }
  }

  .technician {
    margin-top: 36px;

    strong,
    p,
    ul {
      font-size: 18px;
    }

    strong {
      color: ${(props) => props.theme.text.h2};
    }

    p {
      margin-top: 4px;
      color: ${(props) => props.theme.text.soft};
    }

    ul {
      margin-top: 24px;

      li {
        color: ${(props) => props.theme.text.primary};
        padding: 10px 0;
      }
    }
  }

  .contact-btn {
    display: grid;
    place-items: center;
    width: 150px;
    height: 60px;
    background: ${(props) => props.theme.background.accent};
    color: ${(props) => props.theme.text.button};
    border-radius: 6px;
    cursor: pointer;
    margin: auto;
    margin-top: 24px;
    font-weight: 600;
    font-size: 18px;
  }
`;
