import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ToggleTheme from "../../components/ToggleTheme";
import { ThemeContextProvider } from "../../contexts/ThemeContext";

describe("ToggleTheme", () => {
  const handleClick = jest.fn();
  it("renders correctly", () => {
    const { asFragment } = render(
      <ThemeContextProvider>
        <ToggleTheme />
      </ThemeContextProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("click handler is called", () => {
    render(
      <ThemeContextProvider>
        <ToggleTheme />
      </ThemeContextProvider>,
    );
    const button = screen.getByRole("button");
    fireEvent(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
