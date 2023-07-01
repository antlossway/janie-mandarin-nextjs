import axios from "axios"
import { url } from "./url"

// console.log("baseURL: ", url)
export const myAxios = axios.create({
    baseURL: url,
    // it's useless to have API_TOKEN, on strapi have to allow "find" on role "public", otherwise give ForbiddenError error even when using API_TOKEN
    headers: {
        Authorization: "bearer" + process.env.API_TOKEN,
    }
})