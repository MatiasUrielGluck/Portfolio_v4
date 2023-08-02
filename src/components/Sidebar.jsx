import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const Sidebar = ({ open, closeFn }) => {
  const theme = useContext(ThemeContext);

  const scrollToElementById = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container theme={theme} open={open}>
      <div className="btn">
        <FontAwesomeIcon icon={faClose} onClick={closeFn} size="xl" />
      </div>
      <ul className="unselectable">
        <li onClick={() => scrollToElementById("profile")}>About me</li>
        <li onClick={() => scrollToElementById("skills")}>Skills</li>
        <li onClick={() => scrollToElementById("education")}>Education</li>
        <li onClick={() => scrollToElementById("experience")}>Experience</li>
        <li onClick={() => scrollToElementById("hobbies")}>Hobbies</li>
        <li onClick={() => scrollToElementById("portfolio")}>Portfolio</li>
        <li onClick={() => scrollToElementById("contact")}>Contact</li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  z-index: 1;
  display: grid;
  place-items: center;

  position: fixed;
  height: 100vh;
  width: 100vw;

  background: ${(props) => props.theme.background.accent};
  color: ${(props) => props.theme.text.secondary};

  transform: ${(props) =>
    props.open ? "translateX(0%)" : "translateX(-200%)"};
  transition: all 0.3s ease;

  @media only screen and (width > 1200px) {
    position: relative;
    height: 100%;
    max-width: 250px;
    width: ${(props) => (props.open ? "100%" : "0")};
    padding: ${(props) => (props.open ? "24px 18px" : "0")};
    overflow: hidden;
    justify-content: start;
  }

  .btn {
    cursor: pointer;
    position: fixed;
    top: 12px;
    left: 12px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 30px;
    background: ${(props) => props.theme.background.accent};
    display: grid;
    place-items: center;
  }

  ul {
    list-style-type: none;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    max-height: 700px;

    @media only screen and (width > 1200px) {
      justify-items: left;
    }

    @media only screen and (max-height: 376px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 48px;
    }

    li {
      cursor: pointer;
    }
  }
`;
