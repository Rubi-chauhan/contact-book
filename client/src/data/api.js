import axios from 'axios';



const apiURL = 'http://localhost:5000/contacts'


export const addContact = async(data)=>{

      return await axios.post(apiURL, data)

}

export const getAllContacts = async()=>{

   return await axios.get(apiURL)

}

export const getContact = async(id)=>{
  
    return await  axios.get(`${apiURL}/${id}`)
 
}

export const updatecontact = async (id,data)=>{

    return await axios.put(`${apiURL}/${id}`, data)
}

export const deletecontact = async(id)=>{

    return await axios.delete(`${apiURL}/${id}`)
}