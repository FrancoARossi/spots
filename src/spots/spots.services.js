import {get, post} from "../utils/http";

export const services = {
    getSpots: () => get("spots"),
    postSpot: (spot) => post("spots", spot),
};
