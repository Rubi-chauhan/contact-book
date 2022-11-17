import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './ContactList.css'
import {getAllContacts,updatecontact, deletecontact} from '../../data/api'


export default function ContactList() {
    const [newContact, setnewContact] = useState([])

    const [deleteData, setdeleteData] = useState('')

    let [newUpdate, setnewUpdate] = useState({
    name: "",
    phone_number: "",
    email: "",
    note: "",
})
    

    const getContacList = async ()=>{
        try {
          const contacts = await getAllContacts()
          
          setnewContact(contacts.data)
          
        } catch (error) {
          throw error
          
        }
      }

   

      const saveData = ()=>{
        const updateContactData = {...newUpdate}
        updatecontact(updateContactData._id)
      }


      const handleChange = ({ target: { name, value } }) => {
        setnewUpdate({ ...newUpdate, [name]: value })
        setnewUpdate =('')
      };

      const handleDelete = ()=>{
        const deleted = {...deleteData}
        deletecontact(deleted)
      }

      useEffect(()=>{
        getContacList();
    },[]);

   
  return (
    <div className="contact-list-container">
        <div >
            <h2>Contacts Listing</h2>
            <p>List of your contacts in your directory </p>
        </div>

        <div className="show-list">
        {newContact && newContact.map(contact =>
        
              <div key={contact._id}>
                <TextField value={contact.name} onChange={handleChange}/>
                <TextField value={contact.email} onChange={handleChange}/>
                <div className="button-container">

           <Button type='submit' variant="contained" onClick={saveData}>Edit</Button>
            <button type="submit" className='btn btn-danger' onClick={handleDelete}>Delete</button>

         </div>
            </div>

        )}

        </div>



        
    </div>
  )
}
