import { useContext, useRef, useState } from "react";
import Button from "../UI/Button";
import Checkbox from "../UI/Checkbox";
import Input from "../UI/Input";
import styles from "./SearchBar.module.css";
import { JobsContext } from "../../store/JobsContextProvider";
import { motion, AnimatePresence } from "framer-motion";

import filterIconSrc from "../../assets/mobile/icon-filter.svg";
import searchIconSrc from "../../assets/mobile/icon-search.svg";
import Backdrop from "../Backdrop";

const SearchBar = () => {
  const { filterByInfos, filterByLocation, fullTimeOnly, updateFilterParams } =
    useContext(JobsContext);

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [filterByInfosValue, setFilterByInfosValue] = useState(filterByInfos);
  const [filterByLocationValue, setFilterByLocationValue] =
    useState(filterByLocation);
  const [fullTimeOnlyChecked, setFullTimeOnlyChecked] = useState(fullTimeOnly);

  const filterByInfosInput = useRef();
  const filterByLocationInput = useRef();
  const fullTimeOnlyInput = useRef();

  const submitSearchHandler = (e) => {
    e.preventDefault();

    if (isSettingsModalOpen) setIsSettingsModalOpen(false);

    updateFilterParams(
      filterByInfosValue,
      filterByLocationValue,
      fullTimeOnlyChecked
    );
  };

  const changeInputInfosHandler = (e) => {
    setFilterByInfosValue(e.target.value);
  };

  const changeInputLocationHandler = (e) => {
    setFilterByLocationValue(e.target.value);
  };

  const changeCheckboxValueHandler = (e) => {
    setFullTimeOnlyChecked(e.target.checked);
  };

  const openSettingsModalHandler = (e) => {
    e.preventDefault();
    setIsSettingsModalOpen(true);
  };

  return (
    <form className={styles.searchBarContainer} onSubmit={submitSearchHandler}>
      <section className={styles.searchBar}>
        <Input
          onChange={changeInputInfosHandler}
          id="filterByInfos"
          placeholder="Filter by title, companies, expertise..."
          placeholderResponsive="Filter by title..."
          ref={filterByInfosInput}
          value={filterByInfosValue}
        />

        {!isSettingsModalOpen && (
          <>
            <Input
              onChange={changeInputLocationHandler}
              id="filterByLocation"
              placeholder="Filter by location..."
              ref={filterByLocationInput}
              value={filterByLocationValue}
              hideOnMobile
            />
            <Checkbox
              onChange={changeCheckboxValueHandler}
              id="filterByFullTime"
              text="Full time only"
              responsiveText="Full time"
              ref={fullTimeOnlyInput}
              checked={fullTimeOnlyChecked}
              hideOnMobile
            />
            <Button primary hideOnMobile>
              Search
            </Button>
          </>
        )}
        <AnimatePresence>
          {isSettingsModalOpen && (
            <>
              <Backdrop exit={{ opacity: 0 }} />
              <motion.div
                className={styles.searchBarMoreInfos}
                initial={{
                  opacity: 0,
                  y: "-10%",
                  x: "-50%",
                }}
                animate={{
                  opacity: 1,
                  y: "-50%",
                  x: "-50%",
                  transition: { delay: 0.2 },
                }}
                exit={{ opacity: 0, transition: { delay: 0 } }}
              >
                <Input
                  onChange={changeInputLocationHandler}
                  id="filterByLocation"
                  placeholder="Filter by location..."
                  ref={filterByLocationInput}
                  value={filterByLocationValue}
                />
                <Checkbox
                  onChange={changeCheckboxValueHandler}
                  id="filterByFullTime"
                  text="Full time only"
                  responsiveText="Full time"
                  ref={fullTimeOnlyInput}
                  checked={fullTimeOnlyChecked}
                />
                <div>
                  <Button primary autoWidth>
                    Search
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <Button
          onClick={openSettingsModalHandler}
          autoWidth
          showOnlyOnMobile
          noBackground
        >
          <img src={filterIconSrc} alt="filter icon" />
        </Button>
        <Button primary autoWidth showOnlyOnMobile>
          <img src={searchIconSrc} alt="search icon" />
        </Button>
      </section>
    </form>
  );
};

export default SearchBar;
