function Select({ options, value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="custom-select shadow">
      {options.map((option, index) => (
        <option key={index} value={option.value} className="">
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
