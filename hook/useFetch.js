import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";
const rapid_api_key = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapid_api_key,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };
  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const refretch = () => {
    setLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refretch };
};
export default useFetch;
