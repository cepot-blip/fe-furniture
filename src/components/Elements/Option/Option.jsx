import React from 'react';

import Label from '../Fields/Label';

function SelectOpt(props) {
  const { name, value, onChange, onBlur, className, options } = props;
  return (
    <>
      <Label className="block mb-2 text-base font-semibold text-[#111827]">
        Role
      </Label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
      >
        <option value="" label="Silakhan pilih role anda" />
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectOpt;
