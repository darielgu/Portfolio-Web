import React, { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  //Saves theme to local storage in browser
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    //theme refrence in the body
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    //way to toggle between light and dark mode
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //encapsulates the theme and toggleTheme function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
