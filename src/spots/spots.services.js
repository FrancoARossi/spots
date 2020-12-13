import { get, post } from "../utils/http";
import api from "../api.json";

export const services = {
  getSpots: () => {
    return get(api.url);
  },
  postSpot: (spot) => {
    return post(api.url, spot);
  },
};
