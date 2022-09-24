import React from "react";
import PropTypes from "prop-types";
import {
  BsArrowUpCircle,
  BsArrowUpRightCircle,
  BsArrowRightCircle,
  BsArrowDownRightCircle,
  BsArrowDownCircle,
  BsArrowDownLeftCircle,
  BsArrowLeftCircle,
  BsArrowUpLeftCircle,
} from "react-icons/bs";
import "../styles/ForecastDetails.css";
import { useThemeContext } from "../contexts/ThemeContext";

const ForecastDetails = ({ forecast }) => {
  const {
    date, temperature, humidity, wind,
  } = forecast;
  const { useDarkTheme } = useThemeContext();
  const formattedDate = new Date(date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });

  let arrowDirection = <BsArrowUpCircle />;
  if (wind.direction === "sw" || wind.direction === "ssw") {
    arrowDirection = <BsArrowUpRightCircle />;
  }
  if (wind.direction === "w" || wind.direction === "wsw") {
    arrowDirection = <BsArrowRightCircle />;
  }
  if (wind.direction === "nw" || wind.direction === "wnw") {
    arrowDirection = <BsArrowDownRightCircle />;
  }
  if (wind.direction === "n" || wind.direction === "nnw") {
    arrowDirection = <BsArrowDownCircle />;
  }
  if (wind.direction === "ne" || wind.direction === "nne") {
    arrowDirection = <BsArrowDownLeftCircle />;
  }
  if (wind.direction === "e" || wind.direction === "ene") {
    arrowDirection = <BsArrowLeftCircle />;
  }
  if (wind.direction === "se" || wind.direction === "ese") {
    arrowDirection = <BsArrowUpLeftCircle />;
  }

  return (
    <div className={`forecast-details ${useDarkTheme ? "dark" : "light"}`}>
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__max-temperature">
        {`Max Temperature:
        ${temperature.max}`}
        &deg;C
      </div>
      <div className="forecast-details__min-temperature">
        {`Min Temperature: ${temperature.min}`}
        &deg;C
      </div>
      <div className="forecast-details__humidity">
        {`Humidity: ${humidity}%`}
      </div>
      <div className="forecast-details__wind" data-testid="wind-icon">
        {`Wind: ${wind.speed}mph`}
        {arrowDirection}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};

export default ForecastDetails;
