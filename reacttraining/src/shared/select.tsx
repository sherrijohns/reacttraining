import React from "react";
// this is a typescript type
// if you wanted to extend it, could use an interface
type SelectProps = {
  id: string;
  label: string;
  options: SelectOption[];
  placeholder: string;
};

type SelectOption = {
  label: string;
  value: string;
};

export function Select(props: SelectProps) {
  return (
    <div>
      <label htmlFor={props.id}></label>
      <br />
      <select id={props.id}>
        <option>{props.placeholder}</option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
