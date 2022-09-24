import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";
import { ThemeContextProvider } from "../../contexts/ThemeContext";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "800",
    temperature: {
      min: 12,
      max: 22,
    },
    onSelect: jest.fn(),
    selectedDate: 1111111,
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ThemeContextProvider>
        <ForecastSummary
          date={validProps.date}
          description={validProps.description}
          icon={validProps.icon}
          temperature={validProps.temperature}
          onSelect={validProps.onSelect}
          selectedDate={validProps.selectedDate}
        />
      </ThemeContextProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ThemeContextProvider>
        <ForecastSummary
          date={validProps.date}
          description={validProps.description}
          icon={validProps.icon}
          temperature={validProps.temperature}
          onSelect={validProps.onSelect}
          selectedDate={validProps.selectedDate}
        />
      </ThemeContextProvider>,
    );

    expect(getByText("Thu, 1 Jan")).toHaveClass("forecast-summary__date");
    expect(getByText("Stub description")).toHaveClass(
      "forecast-summary__description",
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
  });

  it("click handler is called", () => {
    render(
      <ThemeContextProvider>
        <ForecastSummary
          date={validProps.date}
          description={validProps.description}
          icon={validProps.icon}
          temperature={validProps.temperature}
          onSelect={validProps.onSelect}
          selectedDate={validProps.selectedDate}
        />
      </ThemeContextProvider>,
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(validProps.onSelect).toHaveBeenCalled();
  });
});
