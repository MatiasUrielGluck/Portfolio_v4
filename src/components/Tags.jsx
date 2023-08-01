import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { InfoContainer } from "../styled-components";
import { tagsList } from "../data/tags";

export const Tags = ({ selectedTags, setSelectedTags }) => {
  const theme = useContext(ThemeContext);

  const onToggleTag = (id) => {
    if (selectedTags.indexOf(id) === -1) setSelectedTags([...selectedTags, id]);
    else setSelectedTags(selectedTags.filter((tagId) => tagId != id));
  };

  return (
    <Container theme={theme}>
      <InfoContainer theme={theme}>
        <h2>
          Projects <span>( </span>
          {}
          <span> )</span>
        </h2>

        <div className="tags-container">
          {tagsList.map((tag) => (
            <div
              className={`tag ${
                selectedTags.indexOf(tag.id) !== -1 ? "active" : ""
              }`}
              key={tag.id}
              onClick={() => onToggleTag(tag.id)}
            >
              <p>{tag.name}</p>
            </div>
          ))}
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

    span {
      color: ${(props) => props.theme.tag.borderHover};
    }
  }

  .tags-container {
    margin-top: 36px;

    display: flex;
    flex-flow: row wrap;
    gap: 12px;
    align-items: center;
    justify-content: center;

    .tag {
      width: fit-content;
      cursor: pointer;
      padding: 10px 12px;
      border-radius: 16px;
      border: 1px solid ${(props) => props.theme.tag.border};
      transition: 0.3s ease;

      &.active {
        border: 1px solid ${(props) => props.theme.tag.borderHover};
        background: ${(props) => props.theme.background.accent};

        p {
          color: ${(props) => props.theme.tag.activeText};
        }
      }

      &:hover {
        border: 1px solid ${(props) => props.theme.tag.borderHover};
        box-shadow: #0000003d 0 3px 8px;
      }

      p {
        color: ${(props) => props.theme.tag.text};
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;
