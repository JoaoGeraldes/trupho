// Get the root element
const root = document.querySelector(":root") as HTMLElement;

function getValueFromCSSVar(cssVar: string) {
  return getComputedStyle(root).getPropertyValue(cssVar);
}

// Create a function for setting a variable value
function setCSSVarProperty(isDark: boolean) {
  if (!root) return;

  // Set the value of variable to another value
  const appDarkBackground = getValueFromCSSVar("--dark-background");
  const appLightBackground = getValueFromCSSVar("--light-background");

  const darkBg = getValueFromCSSVar("--dark-tier-bg");
  const darkFontColor = getValueFromCSSVar("--dark-tier-font-color");

  const lightBg = getValueFromCSSVar("--light-tier-bg");
  const lightFontcolor = getValueFromCSSVar("--light-tier-font-color");

  if (isDark) {
    root.style.setProperty("--background", appDarkBackground);
    root.style.setProperty("--tier-bg-color", darkBg);
    root.style.setProperty("--tier-font-color", darkFontColor);
  } else {
    root.style.setProperty("--background", appLightBackground);
    root.style.setProperty("--tier-bg-color", lightBg);
    root.style.setProperty("--tier-font-color", lightFontcolor);
  }
}

export { setCSSVarProperty };
