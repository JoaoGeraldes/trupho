import "./styles/tier.css";
import { Tier } from "./Tier";

export function Tiers() {
  return (
    <>
      <h2>Tiers</h2>
      <div className="tier-container">
        <Tier />
        <Tier />
        <Tier />
      </div>
    </>
  );
}
