import {GET_CONTACTS_FAILED,GET_CONTACTS_LOAD,GET_CONTACTS_SUCCES,GET_ONE_CONTACT} from "../const/contact"
import axios from "axios"

export const getContacts = ()=>async dispatch=>{
    dispatch({type : GET_CONTACTS_LOAD})
    try {
    const result  =  await axios.get("/api/contacts/")
    dispatch({type : GET_CONTACTS_SUCCES, payload :result.data.res})

    } catch (error) {
    dispatch({type : GET_CONTACTS_FAILED, payload:error})
        
    }
}

export const addContact =(newUser) => async dispatch =>{
    try{
        await axios.post("/api/contacts/",newUser)
        dispatch (getContacts());
    } catch(error){
            console.log("Faild to save Data")
    }
}

export const deleteContact = (id) => async dispatch =>{
    try {
        await axios.delete(`/api/contacts/${id}`)
        dispatch (getContacts());
    } catch (error) {
        console.log("Can not delete contact")
    }
}

export const getOneContact = (id) => async dispatch =>{
    try {
     const contactRes =   await axios.get(`/api/contacts/${id}`)
        dispatch({type: GET_ONE_CONTACT,payload:contactRes.data.res})
    } catch (error) {
        console.log(error)
    }
}
export const editContact = (id,userUpdated) => async dispatch =>{
    try {
        await axios.put(`/api/contacts/${id}`,userUpdated)
        dispatch (getContacts());
    } catch (error) {
        console.log("Can not update contact")
    }
}