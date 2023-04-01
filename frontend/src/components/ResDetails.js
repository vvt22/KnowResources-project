const ResDetails = ({ res }) => {
  return (
    <div className="resource-details">
      <h4>{res.title}</h4>
      <p>
        <strong>Links: </strong>
        {res.links}
      </p>
      <p>
        <strong>Videos: </strong>
        {res.videos}
      </p>
      <p>{res.createdAt}</p>
    </div>
  );
};

export default ResDetails;
