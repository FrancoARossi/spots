import axios from "axios";
import {api} from "../api"

export const get = (path) =>
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
        });

//TODO: WIP (waiting for backend)
export const post = (path, body) =>
    axios
        .post(api.url + path, body)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
