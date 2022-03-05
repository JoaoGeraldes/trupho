import { useEffect, useRef, useState } from "react";
import {
  changeTheme,
  getThemeFromLocalStorage,
  setThemeToLocalStorage,
} from "../../helpers/changeTheme";
import "./styles/toggle.css";

export function ThemeToggle() {
  const inputRef = useRef(null);

  const [theme, setTheme] = useState<"light" | "dark">(
    getThemeFromLocalStorage() || "dark"
  ); // Defaults to dark theme (true === dark)

  useEffect(() => {
    setThemeToLocalStorage(theme);
    changeTheme(theme);
  }, [theme]);

  return (
    <div className="toggle-container">
      <label className="switch">
        <input
          defaultChecked={getThemeFromLocalStorage() === "dark" && true}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          ref={inputRef}
          type="checkbox"
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
