import { styled } from "styled-components";
import { FullWidthInfoContainer } from "../styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import abbLogo from "../assets/images/abb.png";
import global66Logo from "../assets/images/global66.png";
import mercadolibreLogo from "../assets/images/mercadolibre.png";
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

        <div className="exp">
          <div className="exp-desc">
            <strong>Software Engineer</strong>
            <p style={{ fontWeight: '500',  }}>Mercado Libre</p>
            <p>Since Feb 2025</p>
          </div>
          <div className="exp-img global66">
            <img src={mercadolibreLogo} alt="mercadolibre matias uriel gluck" />
          </div>
        </div>

        <div className="exp">
          <div className="exp-desc">
            <strong>Frontend Developer</strong>
            <p style={{ fontWeight: '500' }}>Global66</p>
            <p>Nov 2023 - Jan 2025</p>
          </div>
          <div className="exp-img global66">
            <img src={global66Logo} alt="global66 matias uriel gluck" />
          </div>
        </div>

        <div className="exp">
          <div className="exp-desc">
            <strong>Full Stack Developer Intern</strong>
            <p style={{ fontWeight: '500' }}>ABB</p>
            <p>Jan 2023 - Nov 2023</p>
          </div>
          <div className="exp-img">
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

  .exp {
    padding: 36px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    border-bottom: 1px solid ${(props) => props.theme.text.soft};

    @media (width < 768px) {
      grid-template-columns: 1fr;
    }

    .exp-desc {
      justify-self: start;

      @media (width < 768px) {
        order: 1;
        justify-self: center;
        text-align: center;
        margin-top: 2px;
      }

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

    .exp-img {
      img {
        width: 100%;
        max-width: 100px;
      }
    }

    .global66 {
      img {
        width: 100%;
        max-width: 140px;
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
