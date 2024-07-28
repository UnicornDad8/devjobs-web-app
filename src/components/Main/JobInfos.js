const JobInfos = (props) => {
  return (
    <div>
      <p>{props.postedAt}</p>
      <span></span>
      <p>{props.contract}</p>
    </div>
  );
};

export default JobInfos;
