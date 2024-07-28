const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        width: props.autoWidth ? "auto" : "14rem",
        backgroundColor: props.noBackground ? "transparent" : "",
        marginTop: props.marginTop ? "6rem" : "",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
