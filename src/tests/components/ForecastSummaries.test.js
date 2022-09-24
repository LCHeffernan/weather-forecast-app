import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";
import { ThemeContextProvider } from "../../contexts/ThemeContext";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1111111,
        description: "Stub description 1",
        icon: 800,
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 2222222,
        description: "Stub description2",
        icon: 602,
        temperature: {
          max: 24,
          min: 13,
        },
      },
    ],
    onForecastSelect: jest.fn(),
    selectedDate: 1111111,
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ThemeContextProvider>
        <ForecastSummaries
          forecasts={validProps.forecasts}
          onForecastSelect={validProps.onForecastSelect}
          selectedDate={validProps.selectedDate}
        />
      </ThemeContextProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ThemeContextProvider>
        <ForecastSummaries
          forecasts={validProps.forecasts}
          onForecastSelect={validProps.onForecastSelect}
          selectedDate={validProps.selectedDate}
        />
      </ThemeContextProvider>,
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
