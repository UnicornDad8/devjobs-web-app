const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        width: props.autoWidth ? "auto" : "14rem",
        backgroundColor: props.noBackground ? "transparent" : "",
        marginTop: props.marginTop ? "6rem" : "",
      }}
      className={`"" ${props.primary ? "" : ""} ${
        props.hideOnMobile ? "hide-on-mobile" : ""
      } ${props.showOnlyOnMobile ? "show-only-on-mobile" : ""}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
