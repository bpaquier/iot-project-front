import axios from "axios";

export async function fetchUpdatedPresence() {
  return axios({
    baseURL: "http://localhost:5000",
    url: "/influx",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  }).then((response) => response.data);
}
