import {get, post, postImage} from "../utils/http";

export const services = {
    getSpots: () => get("spots"),
    createSpot: (spot) => post("spots/post", spot),
    uploadPhotograph: (photograph) => postImage(photograph),
    createPhotograph: (imgUrl, spotId) => post("photography/post", {url: imgUrl, spotId: spotId}),
    getSpotPhotographs: (spotId) => get(`photographs/spot/${spotId}`),
};
