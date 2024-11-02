/* eslint-disable react/react-in-jsx-scope */
import Input from './Input';
import Label from './Label';

function Fields(props) {
  const {
    label,
    htmlFor,
    type,
    name,
    id,
    value,
    onChange,
    onBlur,
    placeholder,
    className,
    autoComplete,
  } = props;

  return (
    <div className="">
      <Label
        htmlFor={htmlFor}
        className="block mb-2 text-base font-semibold text-[#111827]"
      >
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={className}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default Fields;
