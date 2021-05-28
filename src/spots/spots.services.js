import {get, post} from "../utils/http";

export const services = {
    getSpots: () => get("spots/list"),
    postSpot: (spot) => post("spots", spot),
};
