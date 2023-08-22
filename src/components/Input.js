function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="edit_input "
    />
  );
}

export default Input;
