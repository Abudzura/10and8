// src/CustomButton.jsx
import React from "react";
import PropTypes from "prop-types";
import "./CustomButton.css";

const CustomButton = ({ text, alertMessage, tooltip }) => {
  const handleClick = () => {
    alert(alertMessage);
  };

  return (
    <div className="tooltip-container">
      <button
        className={`custom-button ${tooltip ? "with-tooltip" : ""}`}
        onClick={handleClick}
      >
        {text}
      </button>
      {tooltip && <span className="tooltip-text">{tooltip}</span>}
    </div>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  alertMessage: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
};

export default CustomButton;
