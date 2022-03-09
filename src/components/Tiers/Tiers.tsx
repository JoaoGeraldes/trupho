import { useEffect, useRef, useState } from "react";
import { Loader } from "../Loader/Loader";
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
  const sectionRef = useRef(null);
  const [fetchedData, setTiersList] = useState<null | TiersData>(null);

  // Get Tiers data
  useEffect(() => {
    // Mimic some server delay
    setTimeout(() => {
      fetch(process.env.REACT_APP_API_URI as string)
        .then((response) => response.json())
        .then((result) => setTiersList(result));
    }, 1000);
  }, []);

  // Set FX
  useEffect(() => {
    const animationDelay = setTimeout(() => {
      if (sectionRef.current) {
        const sectionElement = sectionRef.current as HTMLElement;
        sectionElement.classList.add("swing-in-top-fwd");
      }
    }, 250);

    return () => {
      clearTimeout(animationDelay);
    };
  }, []);

  function handleSelectedTier(index: number) {
    if (index === selectedTier) {
      setSelectedTier(null);
    } else {
      setSelectedTier(index);
    }
  }

  if (!fetchedData || fetchedData.tiers.length < 1) {
    return (
      <section data-testid="section-tiers-container" className="tier-container">
        <Loader />
      </section>
    );
  }

  return (
    <section
      data-testid="section-tiers-container"
      ref={sectionRef}
      className="tier-container"
    >
      {fetchedData.tiers.map((tierMetadata, index) => {
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
  );
}
