import { useContext, useState } from "react";
// import { useResContext } from "../hooks/useResContext";
import { ResContext } from "../context/ResContext";

const ResForm = () => {
  const { dispatch } = useContext(ResContext);
  const [title, setTitle] = useState("");
  const [links, setLinks] = useState("");
  const [videos, setVideos] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rss = { title, links, videos };

    const response = await fetch("/api/resources", {
      method: "POST",
      body: JSON.stringify(rss),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setTitle("");
      setLinks("");
      setVideos("");
      dispatch({ type: "CREATE_RESOURCE", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Resource</h3>

      <label>Resource Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Links:</label>
      <input
        type="text"
        onChange={(e) => setLinks(e.target.value)}
        value={links}
        className={emptyFields.includes("links") ? "error" : ""}
      />

      <label>Videos:</label>
      <input
        type="text"
        onChange={(e) => setVideos(e.target.value)}
        value={videos}
        className={emptyFields.includes("videos") ? "error" : ""}
      />

      <button>Add Resource</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ResForm;
