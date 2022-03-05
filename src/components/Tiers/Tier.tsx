import { useState } from "react";
import { TierProps } from "./Tiers";
import "../../fx.css";

interface Handlers {
  onClick: null | ((tierIndex: number) => void);
}

// interface TierProps {
//   price: number;
//   title: string;
//   subtitle: string;
//   onClick: () => void;
//   selected: boolean;
// }

const selectedStyle = {
  button: {
    background: "#1eaa17",
  },
  tierCard: {
    border: "5px solid rgb(102 187 100)",
  },
};

export function Tier(props: TierProps) {
  // const [isSelected, setIsSelected] = useState(false);
  const { price, subtitle, title, selected, index, handleSelectedTier } = props;

  // const handlers: Handlers = {
  //   onClick: click,
  // };

  // const handleClick = handlers[mock.function];

  return (
    <div className="tier " style={selected ? selectedStyle.tierCard : {}}>
      <h1>{price} €</h1>
      <section>
        {title}
        <p>{subtitle}</p>
      </section>
      <footer>
        <hr />
        {/* <button onClick={() => setIsSelected(!isSelected)}>Select</button> */}
        <button
          style={selected ? selectedStyle.button : {}}
          onClick={() => handleSelectedTier(index)}
        >
          {selected ? "Selected ✔" : "Select"}
        </button>
      </footer>
    </div>
  );
}
