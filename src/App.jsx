import styled from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
import { changeTheme, loadTheme } from "./helpers";
import { Content, Sidebar } from "./components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { light } from "./themes";

export const App = () => {
  const [theme, setTheme] = useState(loadTheme());
  const [sidebarOpen, setSidebarOpen] = useState(
    window.innerWidth > 1200 ? true : false
  );

  return (
    <ThemeContext.Provider value={theme}>
      <AppContainer theme={theme} $isSidebarOpen={sidebarOpen}>
        <div className="btn" onClick={() => setSidebarOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div
          className="btn"
          onClick={() => {
            setTheme(changeTheme());
          }}
        >
          <FontAwesomeIcon icon={theme === light ? faSun : faMoon} />
        </div>
        <Sidebar open={sidebarOpen} closeFn={() => setSidebarOpen(false)} />
        <Content />
      </AppContainer>
    </ThemeContext.Provider>
  );
};

const AppContainer = styled.div`
  height: 100vh;
  overflow: auto;
  background: ${(props) => props.theme.background.primary};
  transition: all 0.3s ease;

  @media only screen and (width > 768px) {
    display: flex;
    flex-flow: row nowrap;
  }

  .btn {
    cursor: pointer;
    position: fixed;
    top: 12px;
    left: 12px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 30px;
    background: ${(props) => props.theme.background.accent};
    color: ${(props) => props.theme.text.secondary};
    display: grid;
    place-items: center;
    transition: all 0.3s ease;
    z-index: 2;

    &:nth-child(2) {
      top: 63px;

      @media only screen and (width > 1200px) {
        top: ${(props) => (props.$isSidebarOpen ? "12px" : "63px")};
        left: ${(props) => (props.$isSidebarOpen ? "63px" : "12px")};
        z-index: 11;
      }
    }
  }
`;
