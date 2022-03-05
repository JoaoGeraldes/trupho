// Get the root element
const root = document.querySelector(":root") as HTMLElement;

function getValueFromCSSVar(cssVar: string) {
  return getComputedStyle(root).getPropertyValue(cssVar);
}

// Create a function for setting a variable value
function changeTheme(theme: "dark" | "light") {
  if (!root) return;

  const appDarkBackground = getValueFromCSSVar("--dark-background");
  const appLightBackground = getValueFromCSSVar("--light-background");

  const darkBg = getValueFromCSSVar("--dark-tier-bg");
  const darkFontColor = getValueFromCSSVar("--dark-tier-font-color");

  const lightBg = getValueFromCSSVar("--light-tier-bg");
  const lightFontcolor = getValueFromCSSVar("--light-tier-font-color");

  // Set the values of css vars to another value
  if (theme === "dark") {
    root.style.setProperty("--background", appDarkBackground);
    root.style.setProperty("--tier-bg-color", darkBg);
    root.style.setProperty("--tier-font-color", darkFontColor);
  } else {
    root.style.setProperty("--background", appLightBackground);
    root.style.setProperty("--tier-bg-color", lightBg);
    root.style.setProperty("--tier-font-color", lightFontcolor);
  }
}

function setThemeToLocalStorage(theme: "dark" | "light") {
  localStorage.setItem("theme", theme);
}

function getThemeFromLocalStorage() {
  return localStorage.getItem("theme") as "dark" | "light" | null;
}

export { changeTheme, getThemeFromLocalStorage, setThemeToLocalStorage };
