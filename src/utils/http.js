import axios from "axios";

export const get = (url) =>
  axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
