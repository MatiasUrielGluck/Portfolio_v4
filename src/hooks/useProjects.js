import { useEffect, useState } from "react";
import { getProjects } from "../helpers";

export const useProjects = (tagsList, selectedPage) => {
  const [basicProjectList, setBasicProjectList] = useState(getProjects());
  const [filteredProjectList, setFilteredProjectList] = useState(getProjects());
  const [projectsList, setProjectsList] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const filterProjectsByTags = (tagsList) => {
    const filtered = basicProjectList.filter((project) => {
      let result = true;
      tagsList.forEach((tag) => {
        if (!project.tags.includes(tag)) result = false;
      });
      return result;
    });
    setFilteredProjectList(filtered);
    setProjectsList(filtered);
  };

  const paginateProjects = (cardsPerPage) => {
    if (cardsPerPage === 1) {
      setProjectsList([filteredProjectList[selectedPage - 1]]);
    } else if (cardsPerPage === 2) {
      setProjectsList(
        filteredProjectList.slice((selectedPage - 1) * 2, selectedPage * 2)
      );
    } else {
      setProjectsList(
        filteredProjectList.slice((selectedPage - 1) * 3, selectedPage * 3)
      );
    }
  };

  const handleResize = () => {
    console.log(selectedPage);
    if (window.innerWidth > 1100) {
      // 3 cards per page
      // setNumOfPages(Math.ceil(basicProjectList.length / 3));
      paginateProjects(3);
    } else if (window.innerWidth > 670) {
      // 2 cards per page
      // setNumOfPages(Math.ceil(basicProjectList.length / 2));
      paginateProjects(2);
    } else {
      // 1  card per page
      // setNumOfPages(basicProjectList.length);
      paginateProjects(1);
    }
  };

  useEffect(() => {
    handleResize();
  }, [filteredProjectList]);

  useEffect(() => {
    filterProjectsByTags(tagsList);
  }, [tagsList]);

  useEffect(() => {
    handleResize();
  }, [selectedPage]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return {
    projectsList,
    numOfPages,
  };
};
