import { get } from "../utils/http";
import api from "../api.json";

export const services = {
  getSpots: () => {
    let url = api.url;
    return get(url);
  },
};
