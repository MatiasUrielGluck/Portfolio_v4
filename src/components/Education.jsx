import { styled } from "styled-components";
import { InfoContainer } from "../styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { EducationElement } from "./";
import { educationList } from "../data/education";

export const Education = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme} id="education">
      <InfoContainer theme={theme}>
        <h2>Education</h2>

        <div className="education-container">
          <ul className="fa-ul">
            {educationList.map((education) => (
              <li key={education.id}>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faBookOpen} />
                </span>
                <EducationElement
                  educationTitle={education.title}
                  educationDesc={education.desc}
                />
              </li>
            ))}
          </ul>
        </div>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 36px;

  h2 {
    color: ${(props) => props.theme.text.accent};
    font-weight: 500;
    text-align: center;
  }

  .education-container {
    margin-top: 24px;

    ul {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;

      span {
        color: ${(props) => props.theme.text.primary};
      }

      @media only screen and (width > 975px) {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`;
