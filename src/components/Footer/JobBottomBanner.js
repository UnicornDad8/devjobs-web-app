import Button from "../UI/Button";

const JobBottomBanner = (props) => {
  return (
    <section>
      <div>
        <h3>{props.position}</h3>
        <p>{props.company}</p>
      </div>
      <a href={props.apply} target="_blank" rel="noreferrer">
        <Button primary>Apply now</Button>
      </a>
    </section>
  );
};

export default JobBottomBanner;
