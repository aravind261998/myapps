import axios from 'axios';
import { GET_ERROR,GET_CONTACTS,DELETE_CONTACT } from './type';
export const createContact=(contact,history)=>async dispatch=> {
    try {
        const res =await axios.post ("http://localhost:9102/api/v1/contacts",contact)
       // history.push("/dashboard");
        alert("Created successfully")
       // history.push("/addCandidate");
       history.push("/getContact");
    } catch (err) {
        dispatch({
            type:GET_ERROR,
            payload:err.response.data
        })
    }
}
export const getContacts=()=>async dispatch=>{
    const res=await axios.get("http://localhost:9102/api/v1/contacts");
    dispatch({
        type:GET_CONTACTS,
        payload:res.data
    })
}

export const deleteContact=(contactId,history)=>async dispatch=>{
    try{
        if(window.confirm("Are you sure ? This will delete the candidate and the data related to it")) {
        await axios.delete("http://localhost:9102/api/v1/contacts/{Id}");
        history.push("/")
        dispatch({
            type:DELETE_CONTACT,
            payload:contactId
        })
     }}
     catch (error) {
        dispatch({
            type:GET_ERROR,
            payload:error.response.data
        })
    }

  }