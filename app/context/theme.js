"use client";
import {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
const AppContext = createContext({});
export const AppContextProvider = memo(({ children }) => {
  const [background, setBackground] = useState("light");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const toggleTheme = () => {
    const html = document.documentElement;
    setBackground(background === "light" ? "dark" : "light");
    if (background === "light" && html.classList.contains("light")) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
    // html.classList.toggle(background);
  };

  useEffect(() => {
    console.log("Component mounted");
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const responseData = await response.json();
        if (response.ok) {
          setUsers(responseData);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, [isLoading]);
  const value = useMemo(
    () => ({
      background,
      setBackground,
      users,
      setUsers,
      isLoading,
      setIsLoading,
      toggleTheme,
    }),
    [background, users, isLoading]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
});
const useAppContext = () => useContext(AppContext);
export default useAppContext;
