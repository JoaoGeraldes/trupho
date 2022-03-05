import { useEffect, useState } from "react";
import "./App.css";
import { Tiers } from "./components/Tiers/Tiers";
import { setCSSVarProperty } from "./helpers/changeTheme";

function App() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    setCSSVarProperty(theme);
  });

  return (
    <div className="App">
      <button onClick={() => setTheme(!theme)}>Change Theme!</button>
      <Tiers />
    </div>
  );
}

export default App;
