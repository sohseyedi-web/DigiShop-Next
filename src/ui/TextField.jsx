function TextField({ label, name, value, onChange,placeholder="" }) {
    return (
      <div>
        <label htmlFor={name} className="block mb-2">
          {label}
        </label>
        <input
          autoComplete="off"
          className="textField"
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
  export default TextField;