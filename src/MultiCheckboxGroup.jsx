import React, { useState } from "react";
import "./MultiCheckboxGroup.css";

function CheckboxCard({ label, onChange }) {
  return (
    <div className="checkbox-card">
      <label>
        <input type="checkbox" onChange={onChange} />
        {label}
      </label>
    </div>
  );
}

function MultiCheckboxGroup({ title, options, onSelectionChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    const updatedSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((selected) => selected !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedSelection);
    onSelectionChange(updatedSelection);
  };

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  
  const checkboxChunks = chunkArray(options, 2);

  return (
    <div className="multi-checkbox-group">
      <h3>{title}</h3>
      <div className="checkbox-grid">
        {checkboxChunks.map((chunk, index) => (
          <div key={index} className="checkbox-row">
            {chunk.map((option) => (
              <CheckboxCard
                key={option}
                label={option}
                onChange={() => handleCheckboxChange(option)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultiCheckboxGroup;
