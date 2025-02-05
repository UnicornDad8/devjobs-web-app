import CompanyHeader from "../components/Main/CompanyHeader";
import JobDescription from "../components/Main/JobDescription";
import JobBottomBanner from "../components/Footer/JobBottomBanner";
import { motion } from "framer-motion";

import jobsData from "../assets/data.json";

import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const JobPage = () => {
  let { jobId } = useParams();

  const currentJobPage = jobsData.find((jobData) => jobData.id === +jobId);

  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
  }, []);

  return (
    <>
      {!currentJobPage && <Navigate replace to="/not-found" />}
      {currentJobPage && (
        <>
          <motion.main
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ ease: "easeInOut" }}
          >
            <CompanyHeader
              logo={currentJobPage.logo}
              logoBackground={currentJobPage.logoBackground}
              company={currentJobPage.company}
              website={currentJobPage.website}
            />
            <JobDescription {...currentJobPage} />
          </motion.main>
          <motion.footer>
            <JobBottomBanner
              company={currentJobPage.company}
              position={currentJobPage.position}
              apply={currentJobPage.apply}
            />
          </motion.footer>
        </>
      )}
    </>
  );
};

export default JobPage;
