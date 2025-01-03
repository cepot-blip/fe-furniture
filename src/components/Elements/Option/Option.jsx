/* eslint-disable operator-linebreak */
import React from 'react';

import Label from '../Fields/Label';

function SelectOpt(props) {
  const {
    name,
    value,
    onChange,
    onBlur,
    className,
    options,
    label,
    children,
    title,
  } = props;
  return (
    <>
      <Label className="block mb-2 text-base font-semibold">{title}</Label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {children}
      </select>
    </>
  );
}

export default SelectOpt;
