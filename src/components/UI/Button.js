const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        width: props.autoWidth ? "auto" : "14rem",
        backgroundColor: props.noBackground ? "transparent" : "",
        marginTop: props.marginTop ? "6rem" : "",
      }}
      className={`"button-font font-bold rounded-[0.5rem] p-[1.6rem] capitalize duration-200 ease-linear" ${
        props.primary ? "text-white button-primary" : "button-secondary"
      } ${props.hideOnMobile ? "hide-on-mobile" : ""} ${
        props.showOnlyOnMobile ? "show-only-on-mobile" : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
