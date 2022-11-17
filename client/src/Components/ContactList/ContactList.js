import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import './ContactList.css'
import {getAllContacts,updatecontact, deletecontact} from '../../data/api'


export default function ContactList() {
    const [newContact, setnewContact] = useState([])
    console.log("new contacts:", newContact)

    const getContacList = ()=>{
        try {
          const contacts = getAllContacts()
          console.log("contacts:", contacts)
          setnewContact(contacts)
          
        } catch (error) {
          throw error
          
        }
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
                <p>{contact.name}</p>
                <p>{contact.email}</p>
            </div>

        )}
                    <div className="button-container">

                 <Button type='submit' variant="contained" onClick={updatecontact}>Edit</Button>
                   <button className='btn btn-danger' onClick={deletecontact}>Delete</button>

                </div>
        </div>



        
    </div>
  )
}
