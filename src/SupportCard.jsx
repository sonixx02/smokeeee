
import React, { useState } from 'react';
import './SupportCard.css';

const SupportCard = ({ title, options, onSelectionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    const updatedSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((selected) => selected !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedSelection);
    onSelectionChange(updatedSelection);
  };

  return (
    <div className="support-card">
      <h3>{title}</h3>
      <div className="checkbox-grid">
        {options.map((option) => (
          <div key={option} className="checkbox-option">
            <input
              type="checkbox"
              id={option}
              onChange={() => handleCheckboxChange(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportCard;
