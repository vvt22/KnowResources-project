import { useResContext } from "../hooks/useResContext";

const ResDetails = ({ res }) => {
  const { dispatch } = useResContext();

  const handleClick = async () => {
    const response = await fetch("/api/resources/" + res._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_RESOURCE", payload: json });
    }
  };
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
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default ResDetails;
