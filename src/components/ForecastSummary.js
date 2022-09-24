import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import { useThemeContext } from "../contexts/ThemeContext";

import "../styles/ForecastSummary.css";

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  onSelect,
  selectedDate,
}) => {
  const formattedDate = new Date(date).toDateString();
  const { useDarkTheme } = useThemeContext();

  return (
    <div
      className={`forecast-summary ${
        date === selectedDate ? "selected" : "unselected"
      } ${useDarkTheme ? "dark" : "light"}`}
      data-testid="forecast-summary"
    >
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => onSelect(date)}>
        More Details
      </button>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedDate: PropTypes.number.isRequired,
};

export default ForecastSummary;
