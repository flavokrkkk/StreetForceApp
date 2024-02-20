import { $host } from "./index.js";

export const addBrand = async(brand) => {
    const {data} = await $host.post("api/brand/addBrand", {brand})
    return {data}
}

export const getBrand = async() =>{
    const {data} = await $host.get("api/brand/getBrand")
    return {data}
}
