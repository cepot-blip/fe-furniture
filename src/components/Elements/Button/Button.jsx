/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
function Button(props) {
  const { type, className, children, onClick, to, disabled } = props;
  return (
    <button
      to={to}
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
