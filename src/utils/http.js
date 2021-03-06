import axios from "axios";
import {api} from "../api"

export const get = (path) => (
    axios
        .get(api.url + path, {
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
        })
)

export const post = (path, body) => (
    axios
        .post(api.url + path, body)
        .then((res) => {
            return res.data;
        })
)

export const postImage = (img) => {
    let body = new FormData();
    body.set('key', 'fc26e4e4669f2a30bf5f04882c3dd201')
    body.append('image', img)

    return axios
        .post("https://api.imgbb.com/1/upload", body)
        .then((res) => {
            return res.data.data;
        });
}
