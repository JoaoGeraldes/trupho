import { useState } from "react";
import "./styles/tier.css";
import { Tier } from "./Tier";

interface TierMetadata {
  price: number;
  title: string;
  subtitle: string;
}

export interface TierProps extends TierMetadata {
  selected: boolean;
  index: number;
  handleSelectedTier: (index: number) => void;
}

interface TiersData {
  tiers: TierMetadata[];
}

export function Tiers() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const mock: TiersData = {
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

  function handleSelectedTier(index: number) {
    if (index === selectedTier) {
      setSelectedTier(null);
    } else {
      setSelectedTier(index);
    }
  }

  return (
    <>
      <h2>Tiers</h2>
      <section className="tier-container swing-in-top-fwd">
        {mock.tiers.map((tierMetadata, index) => {
          const isTierSelected = index === selectedTier;
          return (
            <Tier
              key={index}
              handleSelectedTier={handleSelectedTier}
              index={index}
              selected={isTierSelected}
              {...tierMetadata}
            ></Tier>
          );
        })}
      </section>
    </>
  );
}
