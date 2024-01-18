function Button(props) {
  const { title, children } = props;

  return (
    <button className="button-c">
      <span className="text">{title}</span>
      {children}
    </button>
  );
}

export default Button;
