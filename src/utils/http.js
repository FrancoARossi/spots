export const get = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
