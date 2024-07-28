import { motion } from "framer-motion";

const Backdrop = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={props.exit}
    ></motion.div>
  );
};

export default Backdrop;
