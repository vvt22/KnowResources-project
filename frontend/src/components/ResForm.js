import { useState } from "react";

const ResForm = () => {
  const [title, setTitle] = useState("");
  const [links, setLinks] = useState("");
  const [videos, setVideos] = useState("");
  const [error, setError] = useState(null);

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
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLinks("");
      setVideos("");
      console.log("new resource added:", json);
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
      />

      <label>Links:</label>
      <input
        type="text"
        onChange={(e) => setLinks(e.target.value)}
        value={links}
      />

      <label>Videos:</label>
      <input
        type="text"
        onChange={(e) => setVideos(e.target.value)}
        value={videos}
      />

      <button>Add Resource</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ResForm;
