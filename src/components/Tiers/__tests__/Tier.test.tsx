import { render, screen } from "@testing-library/react";
import { Tier } from "../Tier";

describe("Tier component", () => {
  it("Should render Tier component", () => {
    render(
      <Tier
        selected={false}
        index={0}
        handleSelectedTier={function (index: number): void {
          throw new Error("Function not implemented.");
        }}
        price={0}
        title={""}
        subtitle={""}
      />
    );
  });

  it("Should have a wrapper element with class named 'tier'", () => {
    render(
      <Tier
        selected={false}
        index={0}
        handleSelectedTier={function (index: number): void {
          throw new Error("Function not implemented.");
        }}
        price={0}
        title={""}
        subtitle={""}
      />
    );
    const section = screen.getByTestId("tier-container");
    expect(section).toHaveClass("tier");
  });
});
