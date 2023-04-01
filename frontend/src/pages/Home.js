import { useEffect, useState } from "react";

// components
const Home = () => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      const response = await fetch("/api/resources");
      const json = await response.json();

      if (response.ok) {
        setResource(json);
      }
    };

    fetchResource();
  }, []);

  return (
    <div className="home">
      <div className="resource">
        {resource && resource.map((res) => <p key={res._id}>{res.title}</p>)}
      </div>
    </div>
  );
};

export default Home;
