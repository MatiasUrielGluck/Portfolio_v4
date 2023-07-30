import profileImage from "../assets/images/perfil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { styled } from "styled-components";
import { InfoContainer } from "../styled-components";

export const ProfileContainer = () => {
  const theme = useContext(ThemeContext);

  return (
    <InfoContainer theme={theme}>
      <Container theme={theme}>
        <div className="profile--img-container">
          <img src={profileImage} alt="profile image matias uriel gluck" />
        </div>
        <div className="profile--info-container">
          <div className="profile--info--desc-container">
            <h2>Matías Uriel Gluck</h2>
            <p>Full stack web developer</p>
            <a href="mailto:matiasugluck@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>matiasugluck@gmail.com</span>
            </a>
          </div>
          <div className="profile--info--large-container">
            <p>
              I am a software engenieering student and Full Stack Developer with
              an entrepreneurial spirit. Organized, responsible and well
              predisposed for teamwork. I took courses and projects in the area
              of web development.
            </p>
          </div>
        </div>
      </Container>
    </InfoContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media only screen and (width > 900px) {
    flex-flow: row nowrap;
    gap: 24px;
  }

  .profile--img-container {
    @media only screen and (width > 900px) {
      width: 30%;
      display: grid;
      place-items: center;
    }

    img {
      max-width: 250px;
      width: 100%;
      border-radius: 16px;
    }
  }

  .profile--info-container {
    margin-top: 12px;

    @media only screen and (width > 900px) {
      width: 70%;
      margin-top: 0;
    }

    .profile--info--desc-container {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 12px;
      text-align: center;

      @media only screen and (width > 900px) {
        text-align: initial;
      }

      h2 {
        font-weight: 600;
        color: ${(props) => props.theme.text.accent};
      }

      a {
        text-decoration: none;
        color: ${(props) => props.theme.text.h2};
        font-weight: 500;

        @media only screen and (width > 900px) {
          text-align: right;
        }

        .icon {
          color: ${(props) => props.theme.text.accent};
        }

        span {
          margin-left: 4px;
        }
      }

      p {
        font-weight: 500;
        font-size: 18px;
        color: ${(props) => props.theme.text.hard};
      }

      @media only screen and (width > 900px) {
        grid-template-columns: 1fr 1fr;

        p {
          order: 1;
        }
      }
    }

    .profile--info--large-container {
      margin-top: 24px;

      p {
        font-size: 18px;
        font-weight: 500;
        color: ${(props) => props.theme.text.soft};
        line-height: 24px;
      }
    }
  }
`;