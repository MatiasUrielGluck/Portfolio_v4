import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

import {
  Education,
  Experience,
  Hobbies,
  Portfolio,
  ProfileContainer,
  Skills,
  Tags,
} from "./";
import { useProjects } from "../hooks/useProjects";

export const Content = () => {
  const theme = useContext(ThemeContext);

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);

  const { projectsList, numOfPages } = useProjects(
    selectedTags,
    selectedPage,
    setSelectedPage
  );

  useEffect(() => {
    setSelectedPage(1);
  }, [selectedTags]);

  return (
    <Container theme={theme}>
      <ProfileContainer />
      <Skills />
      <Education />
      <div className="dual-section">
        <Experience />
        <Hobbies />
      </div>
      <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <Portfolio projectsList={projectsList} />
      <button onClick={() => setSelectedPage(selectedPage + 1)}>Sig pag</button>
      <p>{numOfPages}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
  overflow: auto;

  @media only screen and (width > 768px) {
    padding: 12px 5%;
  }

  .dual-section {
    margin-top: 36px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 36px;

    @media only screen and (width > 920px) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 1fr;
    }
  }
`;
