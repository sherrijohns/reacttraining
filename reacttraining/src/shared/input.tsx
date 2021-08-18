import React from "react";
// this is a typescript type
// if you wanted to extend it, could use an interface
type InputProps = {
  label: string;
  id: string;
};

export function Input(props: InputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input type="text" id={props.id} />
    </div>
  );
}
