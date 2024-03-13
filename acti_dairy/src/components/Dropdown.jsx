import React, { useState } from 'react';

function CustomDropdown({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <button className="custom-dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : 'Select'}
      </button>
      {isOpen && (
        <ul className="custom-dropdown-menu">
          {options.map((option, index) => (
            <li key={index} className="custom-dropdown-item" onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomDropdown;
