import { forwardRef } from "react";
import useResponsiveText from "../../hooks/useResponsiveText";

const Checkbox = forwardRef((props, ref) => {
  const text = useResponsiveText(props.text, props.responsiveText);

  return (
    <label
      htmlFor={props.id}
      className={`"relative flex items-center gap-[1.5rem] font-semibold cursor-pointer capitalize search-bar-items checkbox-label shrink-0 hover:bg-[#d5d8f7]" ${
        props.hideOnMobile ? "hide-on-mobile" : ""
      }`}
    >
      <input
        onChange={props.onChange}
        id={props.id}
        type="checkbox"
        ref={ref}
        checked={props.checked}
        className="absolute w-0 h-0 opacity-0 checkbox-default-input"
      />
      <span className="shrink-0 w-[2.4rem] h-[2.4rem] bg-checkbox rounded-[0.3rem] relative duration-200 ease-linear hover:bg-[#d5d8f7] checkbox-custom-input"></span>
      {text}
    </label>
  );
});

export default Checkbox;
