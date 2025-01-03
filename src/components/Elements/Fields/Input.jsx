/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
function Input(props) {
  const {
    type,
    name,
    id,
    value,
    onChange,
    onBlur,
    className,
    placeholder,
    autoComplete,
    icons,
    required,
    min,
    max,
    maxLength,
    minLength,
  } = props;
  return (
    <div>
      <input
        icons={icons}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        min={min}
        max={max}
      />
    </div>
  );
}

export default Input;
