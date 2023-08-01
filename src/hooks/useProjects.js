import { useEffect, useState } from "react";
import { getProjects } from "../helpers";

export const useProjects = (tagsList, selectedPage, setSelectedPage) => {
  const [filteredProjectList, setFilteredProjectList] = useState(getProjects());
  const [projectsList, setProjectsList] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [cardsPerPage, setCardsPerPage] = useState();

  const filterProjectsByTags = (tagsList) => {
    const filtered = getProjects().filter((project) => {
      let result = true;
      tagsList.forEach((tag) => {
        if (!project.tags.includes(tag)) result = false;
      });
      return result;
    });
    setFilteredProjectList(filtered);
    setProjectsList(filtered);
  };

  const paginateProjects = () => {
    if (cardsPerPage === 1) {
      setProjectsList([filteredProjectList[selectedPage - 1]]);
      setNumOfPages(Math.ceil(filteredProjectList.length / 1));
    } else if (cardsPerPage === 2) {
      setProjectsList(
        filteredProjectList.slice((selectedPage - 1) * 2, selectedPage * 2)
      );
      setNumOfPages(Math.ceil(filteredProjectList.length / 2));
    } else {
      setProjectsList(
        filteredProjectList.slice((selectedPage - 1) * 3, selectedPage * 3)
      );

      setNumOfPages(Math.ceil(filteredProjectList.length / 3));
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1400) {
      setCardsPerPage(3);
    } else if (window.innerWidth > 768) {
      setCardsPerPage(2);
    } else {
      setCardsPerPage(1);
    }
  };

  useEffect(() => {
    console.log(cardsPerPage);
    setSelectedPage(1);
  }, [cardsPerPage]);

  useEffect(() => {
    paginateProjects();
  }, [cardsPerPage, selectedPage, filteredProjectList]);

  useEffect(() => {
    filterProjectsByTags(tagsList);
  }, [tagsList]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return {
    projectsList,
    numOfPages,
  };
};
