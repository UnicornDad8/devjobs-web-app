import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import { motion } from "framer-motion";

import JobInfos from "./JobInfos";

const Job = (props) => {
  return (
    <motion.article
      variants={props.variants}
      transition={{ type: "tween", duration: 0.5 }}
    >
      <CompanyLogo
        logo={props.logo}
        logoBackground={props.logoBackground}
        small
      />
      <JobInfos postedAt={props.postedAt} contract={props.contract} />
      <Link to={`/${props.id}`}>
        <h3>{props.position}</h3>
      </Link>
      <p>{props.company}</p>
      <h4>{props.location}</h4>
    </motion.article>
  );
};

export default Job;
