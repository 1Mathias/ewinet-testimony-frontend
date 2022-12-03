import axios from "axios";
import _ from "lodash";
import { errorNotification } from "../utils/notifications";

const REACT_APP_API = "http://localhost:5000/api";

const REACT_APP_API_PRODUCTION = "https://ewinet-testimony-api.vercel.app/api";


const api = axios.create({
    baseURL: REACT_APP_API_PRODUCTION,
});

api.interceptors.request.use(
    async function (config) {
        config.headers = {
            ...config.headers
        };
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response) {
            if (_.isString(error.response.data.errors)) {
                errorNotification(error.response.data.errors);
            } else {
                for (let outerErrorMessage of Object.values(
                    error.response.data.errors
                )) {
                    for (let innerErrorMessage of outerErrorMessage) {
                        errorNotification(innerErrorMessage);
                    }
                }
            }
        } else if (error.request) {
            errorNotification(error.message);
        } else {
            errorNotification(error.message);
        }
        return Promise.reject(error);
    }
);

export default api;