import React from 'react';

type Option = {
  id: string;
  title: string;
  description: string;
};

type RadioButtonProps = {
  options: Option[];
};

const RadioButton: React.FC<RadioButtonProps> = ({ options }) => {
  return (
    <div className="radio-options">
      {options.map((option) => (
        <label key={option.id} className="radio-item d-flex">
          <input
            type="radio"
            name="task"
            value={option.id}
          />
          <div className="radio-text">
            <div className="radio-title">{option.title}</div>
            <div className="radio-description">{option.description}</div>
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
