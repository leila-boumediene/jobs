const Job = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <div>
        <p>
          {props.contractType}
          <span>-</span>
        </p>

        <p>
          {props.country}
          <span>-</span>
        </p>

        <p>
          {props.city}
          <span>-</span>
        </p>

        <p>{props.border}</p>
      </div>
    </>
  );
};

export default Job;
