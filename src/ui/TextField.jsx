function TextField({ label, name, value, onChange,placeholder="" }) {
    return (
      <div className="w-full">
        <label htmlFor={name} className="block mb-2">
          {label}
        </label>
        <input
          autoComplete="off"
          className="input input-bordered w-full focus:bg-white bg-gray-200 text-center transition-all duration-300 outline-none"
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