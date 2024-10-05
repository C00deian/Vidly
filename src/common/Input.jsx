import React from "react";

function Input({ name, label, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        onChange={onChange}
        value={value}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
}

export default Input;
