import {get, post, postImage} from "../utils/http";

export const services = {
    getSpots: () => get("spots/list"),
    createSpot: (spot) => post("spots/post", spot),
    uploadPhotograph: (photograph) => postImage(photograph),
    createPhotograph: (imgUrl, spotId) => post("photographs/post", {url: imgUrl, spotId: spotId}),
    getSpotPhotographs: (spotId) => get(`photographs/spot/${spotId}`),
};
