import sunIconSrc from "../../assets/desktop/icon-sun.svg";
import moonIconSrc from "../../assets/desktop/icon-moon.svg";

const Toggle = (props) => {
  return (
    <div>
      <img src={sunIconSrc} alt="light mode icon" />
      <button
        data-active-theme={props.activeTheme}
        onClick={props.onChangeTheme}
      ></button>
      <img src={moonIconSrc} alt="dark mode icon" />
    </div>
  );
};

export default Toggle;
