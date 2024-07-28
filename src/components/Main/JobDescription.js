import Button from "../UI/Button";
import JobInfos from "./JobInfos";

const JobDescription = (props) => {
  return (
    <section>
      <div>
        <div>
          <JobInfos postedAt={props.postedAt} contract={props.contract} />
          <h1>{props.position}</h1>
          <h4>{props.location}</h4>
        </div>
        <a href={props.apply} target="_blank" rel="noreferrer">
          <Button primary>Apply now</Button>
        </a>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
      <div>
        <h3>Requirements</h3>
        <p>{props.requirements.content}</p>
        <ul>
          {props.requirements.items.map((item, index) => (
            <li key={index}>
              <span></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>What You Will Do</h3>
        <p>{props.role.content}</p>
        <ol>
          {props.role.items.map((item, index) => (
            <li key={index}>
              <span>{index + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default JobDescription;
