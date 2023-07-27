import styled from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
import { loadTheme } from "./helpers";
import { Sidebar } from "./components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const App = () => {
  const theme = loadTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ThemeContext.Provider value={theme}>
      <AppContainer theme={theme}>
        <div className="btn">
          <FontAwesomeIcon icon={faBars} onClick={() => setSidebarOpen(true)} />
        </div>
        <Sidebar open={sidebarOpen} closeFn={() => setSidebarOpen(false)} />
        
      </AppContainer>
    </ThemeContext.Provider>
  );
};

const AppContainer = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.background.primary};

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
  }
`;
