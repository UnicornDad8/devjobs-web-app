import sunIconSrc from "../../assets/desktop/icon-sun.svg";
import moonIconSrc from "../../assets/desktop/icon-moon.svg";

const Toggle = (props) => {
  return (
    <div className="flex justify-between items-center gap-[1.2rem]">
      <img src={sunIconSrc} alt="light mode icon" />
      <button
        className="w-[4.8rem] h-[2.4rem] rounded-[1.2rem] relative bg-white duration-200 ease-linear active:scale-90 toggle-button"
        data-active-theme={props.activeTheme}
        onClick={props.onChangeTheme}
      ></button>
      <img src={moonIconSrc} alt="dark mode icon" />
    </div>
  );
};

export default Toggle;
