import { $host } from "./index";


export const getProducts = async(offset, typeId, brandId, gender) => {
    const {data} = await $host.get('api/product/getProductList?offset=' + offset + '&typeId=' + typeId + '&brandId=' + brandId + '&gender=' + gender)
    return {data}
}

export const getCurrentProducts = async(id) => {
    const {data} = await $host.get('api/product/getCurrentProduct?id=' + id)
    return {data}
}

export const createNewProduct = async(product) => {
    const {data} = await $host.post('api/product/createProduct', product)
    return {data}
}

export const deleteProduct = async(id) =>{
    const {data} = await $host.get('api/product/deleteProduct?id=' + id)
    return {data}
}

export const addType = async(type) => {
    const {data} = await $host.post("api/type/addType", {type})
    return {data}
}


export const addBrand = async(brand) => {
    const {data} = await $host.post("api/brand/addBrand", {brand})
    return {data}
}


