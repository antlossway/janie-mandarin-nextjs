import axios from "axios"
import { url } from "./url"

// console.log("baseURL: ", url)
export const myAxios = axios.create({
    baseURL: url,
    // headers: {
    //     Authorization: "bearer" + process.env.API_TOKEN,
    // }
})