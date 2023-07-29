import { dark, light } from "../themes";

export const changeTheme = () => {
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
    return dark;
  } else {
    localStorage.setItem("theme", "light");
    return light;
  }
};
