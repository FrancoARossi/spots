import axios from "axios";

export const get = (url) =>
  axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));

//TODO: WIP (waiting for backend)
export const post = (url, spot) =>
  axios
    .post(url, spot)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
