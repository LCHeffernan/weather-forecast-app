import React from "react";
import PropTypes from "prop-types";
import { useThemeContext } from "../contexts/ThemeContext";

import "../styles/LocationDetails.css";

const LocationDetails = ({ city, country, errorMessage }) => {
  const { useDarkTheme } = useThemeContext();

  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className={`location-details ${useDarkTheme ? "dark" : "light"}`}>
      {city ? `${city}, ${country}` : ""}
    </h1>
  );
};

LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default LocationDetails;
