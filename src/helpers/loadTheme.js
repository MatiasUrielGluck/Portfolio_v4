import { dark, light } from "../themes";

export const loadTheme = () => {
  if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
  if (localStorage.getItem("theme") === "light") return light;
  else if (localStorage.getItem("theme") === "dark") return dark;
  else return light;
};
