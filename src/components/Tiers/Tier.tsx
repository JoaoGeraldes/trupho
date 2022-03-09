import { TierProps } from "./Tiers";
import "../../fx.css";
import { TierButton } from "../Buttons/TierButton";

const selectedStyle = {
  button: {
    background: "#1eaa17",
  },
  tierCard: {
    border: "5px solid rgb(102 187 100)",
  },
};

export function Tier(props: TierProps) {
  const { price, subtitle, title, selected, index, handleSelectedTier } = props;

  return (
    <section
      data-testid="tier-container"
      className="tier"
      style={selected ? selectedStyle.tierCard : {}}
    >
      <h1>{price} €</h1>
      <section>
        {title}
        <p>{subtitle}</p>
      </section>
      <footer>
        <hr />
        <TierButton
          selected={selected}
          clickHandler={() => handleSelectedTier(index)}
        />
      </footer>
    </section>
  );
}
