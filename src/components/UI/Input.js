import searchIconSrc from "../../assets/desktop/icon-search.svg";
import locationIconSrc from "../../assets/desktop/icon-location.svg";

import { forwardRef } from "react";
import useResponsiveText from "../../hooks/useResponsiveText";

const Input = forwardRef((props, ref) => {
  const placeholder = useResponsiveText(
    props.placeholder,
    props.placeholderResponsive
  );

  return (
    <label
      htmlFor={props.id}
      className={`"relative flex items-center gap-[1rem] input-label min-w-[20rem]" ${
        props.hideOnMobile ? "hide-on-mobile" : ""
      }`}
    >
      <img
        src={props.id === "filterByInfos" ? searchIconSrc : locationIconSrc}
        alt={`${props.id} icon`}
      />
      <input
        onChange={props.onChange}
        id={props.id}
        type="text"
        placeholder={placeholder}
        ref={ref}
        value={props.value}
        className="grow input-field p-[1rem] rounded-[0.5rem] overflow-hidden"
      />
    </label>
  );
});

export default Input;
