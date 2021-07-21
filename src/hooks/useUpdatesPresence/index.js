import axios from "axios";
import { useEffect, useState } from "react";

export function usehUpdatedPresence() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios({
      baseURL: "http://localhost:5000",
      url: "/presence",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((rep) => {
        setData(rep.data.data);
        setIsLoading(false);
      })
      .catch((rep) => {
        setData(rep);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, data };
}
