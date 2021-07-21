import axios from "axios";
import { useEffect, useState } from "react";

export function useUpdatedPresence() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    axios({
      baseURL: "https://fluxeo-back.herokuapp.com",
      url: "/presence",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((rep) => {
        if (isMounted) {
          setData(rep.data.data);
          setIsLoading(false);
        }
      })
      .catch((rep) => {
        setData(rep);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { isLoading, data };
}
