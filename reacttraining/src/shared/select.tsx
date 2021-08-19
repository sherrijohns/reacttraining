type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  id: string;
  label: string;
  options: SelectOption[];
  placeholderOption: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

// Destructuring props within the method signature to avoid repeating the word props.
export function Select({
  placeholderOption,
  value,
  options,
  id,
  label,
  onChange,
}: SelectProps) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <br />
      <select
        id={id}
        onChange={onChange}
        value={value}
        className="form-control-sm"
      >
        <option value="">{placeholderOption}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
