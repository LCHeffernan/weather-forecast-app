import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";
import { ThemeContextProvider } from "../../contexts/ThemeContext";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      max: 22,
      min: 12,
    },
    wind: {
      speed: 13,
      direction: "n",
    },
    humidity: 30,
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ThemeContextProvider>
        <ForecastDetails forecast={validProps} />
      </ThemeContextProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ThemeContextProvider>
        <ForecastDetails forecast={validProps} />
      </ThemeContextProvider>,
    );

    expect(getByText("Thu, 1 Jan")).toHaveClass("forecast-details__date");
    expect(getByText("Max Temperature: 22°C")).toHaveClass("forecast-details__max-temperature");
    expect(getByText("Min Temperature: 12°C")).toHaveClass("forecast-details__min-temperature");
    expect(getByText("Wind: 13mph")).toHaveClass("forecast-details__wind");
    expect(getByTestId("wind-icon")).toHaveClass("forecast-details__wind");
    expect(getByText("Humidity: 30%")).toHaveClass("forecast-details__humidity");
  });
});
