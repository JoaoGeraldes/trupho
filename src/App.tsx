import "./App.css";
import { Tiers } from "./components/Tiers/Tiers";

interface Handlers {
  onClick: null | (() => void);
}

interface Tier {
  price: number;
  title: string;
  subtitle: string;
}

interface ComponentData {
  tiers: Tier[];
  function: "onClick";
}

const mock: ComponentData = {
  function: "onClick",
  tiers: [
    {
      price: 100,
      title: "Individual",
      subtitle: "Subtitle #1",
    },
    {
      price: 200,
      title: "Corporations",
      subtitle: "Subtitle #2",
    },
    {
      price: 300,
      title: "Organizations",
      subtitle: "Subtitle #3",
    },
  ],
};

function App() {
  function click() {
    console.log("Clicked!");
  }

  const handlers: Handlers = {
    onClick: click,
  };

  const handleClick = handlers[mock.function];

  if (handleClick) {
    handleClick();
  }

  return (
    <div className="App">
      <Tiers />
    </div>
  );
}

export default App;
