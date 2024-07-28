const CompanyLogo = (props) => {
  return (
    <div style={{ backgroundColor: props.logoBackground }}>
      <img src={props.logo} alt="" />
    </div>
  );
};

export default CompanyLogo;
