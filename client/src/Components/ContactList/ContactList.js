import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './ContactList.css'
import {getAllContacts, deletecontact} from '../../data/api'
import {useNavigate} from 'react-router-dom';


export default function ContactList() {
  const navigate = useNavigate();
    const [newContact, setnewContact] = useState([])

    // const [deleteData, setdeleteData] = useState(false)

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

   

      const saveData = (id)=>{
        
        navigate(`/update-contact/${id}`)
      
      }

      const addNew = ()=>{
        navigate(`/add-contact`)
      }

      const handleChange = ({ target: { name, value } }) => {
        setnewUpdate({ ...newUpdate, [name]: value })
        
      };

      const handleDelete = async(id)=>{
        console.log(id)
        await deletecontact(id)
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

        <button className="btn btn-primary" onClick={()=>addNew()}> Create new contact</button>
        <p></p>

        <div className="show-list">
        {newContact && newContact.map(contact =>
        
             ( <div key={contact._id}>
                <TextField name="name" value={contact.name } onChange={handleChange}/>
                <TextField name="email" value={contact.email} onChange={handleChange}/>
                <TextField name="phone_number" value={contact.phone_number} onChange={handleChange}/>
                <TextField  name="note" value={contact.note} onChange={handleChange}/>
                <div className="button-container">

           <Button type='submit' variant="contained" onClick={()=>saveData(contact._id)}>Edit</Button>
            <button type="submit" className='btn btn-danger' onClick={()=>handleDelete(contact._id)}>Delete</button>

         </div>
            </div>)

        )}

        </div>



        
    </div>
  )
}
