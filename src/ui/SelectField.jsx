const SelectField = ({ label, options, name, value, onChange }) => {
  return (
    <div className="space-y-3">
      <label className="block mb-1 text-lg text-right text-black">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="textField"
      >
        {options?.map((option) => (
          <option
            className=" bg-gray-100"
            value={option.value}
            key={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
