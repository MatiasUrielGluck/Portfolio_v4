import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Skill = ({ icon, text }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <p>{text}</p>
      <FontAwesomeIcon icon={icon} className="icon" />
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  padding: 8px;
  display: flex;
  flex-flow: row nowrap;
  gap: 4px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.skill.border};
  border-radius: 12px;

  p {
    color: ${(props) => props.theme.skill.text};
    font-size: 18px;
    font-weight: 500;
  }

  .icon {
    color: ${(props) => props.theme.skill.icon};
  }
`;
