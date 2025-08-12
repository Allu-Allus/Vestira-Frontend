import { commonApi } from "./commonApi"
import { serverURL } from "./serverURL"

// api to add inventory item
export const addDataAPI = async(reqBody)=>{
    return await commonApi("POST",`${serverURL}/inventory`,reqBody)
}
// api to get all items
export const getAllDataAPI = async()=>{
    return await commonApi("GET",`${serverURL}/inventory`,"")
}
// api to delete items
export const deleteAllDataAPI = async(id)=>{
    return await commonApi("DELETE",`${serverURL}/inventory/${id}`,"")
}
// api to edit items
export const editAllDataAPI = async(id)=>{
    return await commonApi("GET",`${serverURL}/inventory/${id}`,"")
}
// api to update edit item
export const updateEditDataAPI = async(id,reqBody)=>{
    return await commonApi("PUT",`${serverURL}/inventory/${id}`,reqBody)
}