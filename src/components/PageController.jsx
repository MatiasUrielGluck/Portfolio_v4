import { useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export const PageController = ({ actualPage, totalPages, setPage }) => {
  const theme = useContext(ThemeContext);

  const onChangePage = (position) => {
    if (actualPage + position > totalPages) return setPage(1);
    if (actualPage + position < 1) return setPage(totalPages);
    // if (actualPage + position < 1 || actualPage + position > totalPages) return;
    setPage(actualPage + position);
  };

  return (
    <Container theme={theme} className="unselectable">
      <div className="pg-btn back-btn" onClick={() => onChangePage(-1)}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </div>
      <div className="pg-btn actual-page-btn" onClick={() => setPage(1)}>
        <p>
          {actualPage} / {totalPages}
        </p>
      </div>
      <div className="pg-btn next-bn" onClick={() => onChangePage(1)}>
        <FontAwesomeIcon icon={faCaretRight} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: min-content min-content min-content;
  place-items: center;
  margin: 36px auto;
  gap: 12px;
  width: fit-content;

  .pg-btn {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    cursor: pointer;
    border-radius: 8px;
  }

  .back-btn,
  .next-bn {
    border: 1px solid ${(props) => props.theme.pgBtn.normal};
    color: ${(props) => props.theme.pgBtn.normal};
  }

  .actual-page-btn {
    color: ${(props) => props.theme.pgBtn.midText};
    background: ${(props) => props.theme.pgBtn.mid};
  }
`;
