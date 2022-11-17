import axios from 'axios';



const apiURL = 'http://localhost:5000/contacts'


export const addContact = (data)=>{

       axios.post(apiURL, data)

}

export const getAllContacts = ()=>{

    axios.get(apiURL)

}

export const getContact = (contactId)=>{
  
    axios.get(apiURL+'/'+ contactId)
 
}

export const updatecontact = (contactId,data)=>{

    axios.put(apiURL+'/'+ contactId, data)
}

export const deletecontact = (contactId)=>{

    axios.delete(apiURL+'/'+ contactId)
}