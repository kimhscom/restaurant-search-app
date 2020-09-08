import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [Results, setResults] = useState([]);
  const [ErrorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("hi there!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: Term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  // Call searchApi when component
  // is first rendered. BAD CODE!
  // searchApi("pasta");
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, Results, ErrorMessage];
};
