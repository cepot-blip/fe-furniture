/* eslint-disable react/react-in-jsx-scope */
function Label(props) {
  const { htmlFor, className, children } = props;
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}

export default Label;
