import { forwardRef } from "react";
import useResponsiveText from "../../hooks/useResponsiveText";

const Checkbox = forwardRef((props, ref) => {
  const text = useResponsiveText(props.text, props.responsiveText);

  return (
    <label htmlFor={props.id}>
      <input
        onChange={props.onChange}
        id={props.id}
        type="checkbox"
        ref={ref}
        checked={props.checked}
      />
      <span></span>
      {text}
    </label>
  );
});

export default Checkbox;
