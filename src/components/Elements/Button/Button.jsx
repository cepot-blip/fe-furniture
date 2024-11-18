/* eslint-disable react/react-in-jsx-scope */
function Button(props) {
  const { type, className, children, onClick, to, disabled } = props;
  return (
    <button
      to={to}
      className={className}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
