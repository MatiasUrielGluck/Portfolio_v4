import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { ProjectInfoContainer } from "../styled-components";
import { getTagById } from "../helpers";

export const ProjectCard = ({ project }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <ProjectInfoContainer theme={theme}>
        <div className="img-container">
          <img src={project.image} alt="matias uriel gluck app" />
        </div>
        <div className="tags-container">
          {project.tags.map((tag) => (
            <span key={tag}>#{getTagById(tag).name}</span>
          ))}
        </div>
        <h2>{project.name}</h2>
        <p className="project-description">{project.description}</p>
        <div className="actions-container unselectable">
          {project.demoLink ? (
            <a href={project.demoLink} target="_blank">
              <div className="action-btn">Demo</div>
            </a>
          ) : (
            <></>
          )}
          <a href={project.codeLink} target="_blank">
            <div className="action-btn">Code</div>
          </a>
        </div>
      </ProjectInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 1;

  animation: projectAppear 0.8s forwards;

  @keyframes projectAppear {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }

  .img-container {
    height: 200px;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: fill;
    }
  }

  .tags-container {
    margin-top: 24px;
    display: flex;
    flex-flow: row wrap;
    gap: 9px;
    height: 50px;

    span {
      color: ${(props) => props.theme.text.soft};
    }
  }

  h2 {
    margin: 12px 0;
    font-weight: 500;
    color: ${(props) => props.theme.text.accent};
  }

  .project-description {
    color: ${(props) => props.theme.text.soft};
    font-size: 18px;
    font-weight: 500;
  }

  .actions-container {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    a {
      text-decoration: none;
      font-weight: 600;
      border-radius: 16px;

      &:first-of-type {
        color: ${(props) => props.theme.btn.demoText};

        .action-btn {
          background: ${(props) => props.theme.btn.demo};
        }
      }

      &:last-of-type {
        color: ${(props) => props.theme.btn.codeText};
        border: 1px solid ${(props) => props.theme.btn.border};

        .action-btn {
          background: transparent;
        }
      }

      .action-btn {
        display: grid;
        place-items: center;
        width: 120px;
        height: 55px;
        border-radius: 16px;
      }
    }
  }
`;
