import { render, screen } from "@testing-library/react";
import { Tiers } from "../Tiers";

describe("Tiers component", () => {
  it("Should render Tiers component", () => {
    render(<Tiers />);
  });

  it("Should have a wrapper section with a class named 'tier-container'", () => {
    render(<Tiers />);
    const section = screen.getByTestId("section-tiers-container");
    expect(section).toHaveClass("tier-container");
  });
});
