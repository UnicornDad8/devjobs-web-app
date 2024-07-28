import Button from "../UI/Button";
import CompanyLogo from "./CompanyLogo";

const CompanyHeader = (props) => {
  return (
    <section>
      <CompanyLogo
        logo={props.logo}
        logoBackground={props.logoBackground}
        big
      />
      <div>
        <div>
          <h2>{props.company}</h2>
          <p>{props.website}</p>
        </div>
        <a href={props.website} target="_blank" rel="noreferrer">
          <Button secondary>Company Site</Button>
        </a>
      </div>
    </section>
  );
};

export default CompanyHeader;
