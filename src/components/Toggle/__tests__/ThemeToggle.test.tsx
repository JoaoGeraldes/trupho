import { render, screen } from "@testing-library/react";
import { ThemeToggle } from "../ThemeToggle";

describe("Theme Toggle component", () => {
  it("Should render ThemeToggle component", () => {
    render(<ThemeToggle />);
  });

  it("Should have a wrapper class named 'toggle-container'", () => {
    render(<ThemeToggle />);
    const section = screen.getByTestId("toggle-container");
    expect(section).toHaveClass("toggle-container");
  });
});
