import {GET_CONTACTS_FAILED,GET_CONTACTS_LOAD,GET_CONTACTS_SUCCES,GET_ONE_CONTACT } from "../const/contact"


const initialState={
    loading:false,
    contacts:[],
    contact :{},
    err: null
};
export const contactReducer=(state=initialState,{type,payload})=>{

    switch (type) {
        case GET_CONTACTS_LOAD:
            return {...state,loading:true}
        case GET_CONTACTS_SUCCES:
            return {...state,contacts:payload,loading:false}
        case GET_CONTACTS_FAILED:
            return {...state,err:payload,loading:false}
        case GET_ONE_CONTACT : 
            return {...state, contact:payload}
    
        default:
            return state ;
    }
}
