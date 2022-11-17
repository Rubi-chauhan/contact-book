import axios from 'axios';



const apiURL = 'http://localhost:5000/contacts'


export const addContact = (data)=>{

       axios.post(apiURL, data)

}

export const getAllContacts = async()=>{

   return await axios.get(apiURL)

}

export const getContact = async(contactId)=>{
  
    return await  axios.get(apiURL+'/'+ contactId)
 
}

export const updatecontact = async (contactId,data)=>{

    return await axios.put(apiURL+'/'+ contactId, data)
}

export const deletecontact = async(contactId)=>{

    return await axios.delete(apiURL+'/'+ contactId)
}