import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";
import { ThemeContextProvider } from "../../contexts/ThemeContext";

describe("SearchForm", () => {
  const validProps = {
    searchText: "manchester",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ThemeContextProvider>
        <SearchForm
          searchText={validProps.searchText}
          setSearchText={validProps.setSearchText}
          onSubmit={validProps.onSubmit}
        />
      </ThemeContextProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct text", () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <SearchForm
          searchText={validProps.searchText}
          setSearchText={validProps.setSearchText}
          onSubmit={validProps.onSubmit}
        />
      </ThemeContextProvider>,
    );

    expect(getByText("Search")).toHaveClass("search-form__button");
  });

  it("click handler is called", () => {
    render(
      <ThemeContextProvider>
        <SearchForm
          searchText={validProps.searchText}
          setSearchText={validProps.setSearchText}
          onSubmit={validProps.onSubmit}
        />
      </ThemeContextProvider>,
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(validProps.onSubmit).toHaveBeenCalled();
  });
});
