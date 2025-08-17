import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

//For Type Context bcuse needed defaultValue
const defaultValue: DarkModeContextType = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};
type DarkModeProviderProps = {
  children: ReactNode;
};

const DarkModeContext = createContext<DarkModeContextType>(defaultValue);

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  function toggleDarkMode() {
    setIsDarkMode((prev: any) => !prev);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
//custom hook
function useDarkMode() {
  const context = useContext(DarkModeContext);
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useDarkMode, DarkModeProvider };
