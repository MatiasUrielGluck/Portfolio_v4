import { tagsList } from "../data/tags";

export const getTagById = (id) => {
  return tagsList.filter((tag) => tag.id === id)[0];
};
