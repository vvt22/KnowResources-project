import { useContext, useEffect } from "react";
// import { useResContext } from "../hooks/useResContext";
import { ResContext } from "../context/ResContext";

// components
import ResDetails from "../components/ResDetails";
import ResForm from "../components/ResForm";

const Home = () => {
  const { resource, dispatch } = useContext(ResContext);

  useEffect(() => {
    const fetchResource = async () => {
      const response = await fetch("/api/resources");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_RESOURCE", payload: json });
      }
    };

    fetchResource();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="resource">
        {resource &&
          resource.map((res) => <ResDetails res={res} key={res._id} />)}
      </div>
      <ResForm />
    </div>
  );
};

export default Home;
