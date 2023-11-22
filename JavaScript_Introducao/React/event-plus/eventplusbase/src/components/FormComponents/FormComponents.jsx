import React from "react";
import "./FormComponents.css";

export const Input = ({
  type,
  id,
  value,
  required,
  additionalClass = "",
  name,
  placeholder,
  manipulationFunction,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      required={required}
      className={`input-component ${additionalClass}`}
      name={name}
      placeholder={placeholder}
      onChange={manipulationFunction}
      autoComplete="off"
    />
  );
};

export const Button = ({
  type,
  id,
  name,
  additionalClass = "",
  textButton,
  manipulationFunction,
}) => {
  return (
    <button
      onClick={manipulationFunction}
      type={type}
      name={name}
      id={id}
      className={`button-component ${additionalClass}`}
    >
      {textButton}
    </button>
  );
};

export const Select = ({
  id,
  required,
  additionalClass = "",
  name,
  manipulationFunction,
  arrayOptions,
  sim
}) => {
  return (
    <select
      id={id}
      required={required}
      className={`input-component ${additionalClass}`}
      name={name}
    >
      {arrayOptions.map((option) => (
        <option key={option}>{option.text}</option>
      ))}
    </select>
  );
};
