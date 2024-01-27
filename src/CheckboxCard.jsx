import React from 'react';

const CheckboxCard = ({ label, onChange }) => {
  return (
    <div>
      <input type="checkbox" id={label} onChange={onChange} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CheckboxCard;
