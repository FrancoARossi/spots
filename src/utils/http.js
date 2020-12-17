import axios from "axios";

export const get = (url) =>
  axios
    .get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers":
          "Access-Control-Allow-Origin, Origins, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },
    })
    .then((response) => {
      return response.data;
    });
// .catch((error) => console.log(error));

//TODO: WIP (waiting for backend)
export const post = (url, spot) =>
  axios
    .post(url, spot)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
